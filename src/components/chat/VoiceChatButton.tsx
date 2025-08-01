/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mic, MicOff, MessageCircle, X, Play, Pause } from 'lucide-react';
import { useLiveAPIContext } from '../../contexts/LiveAPIContext';
import { useAgent, useUser } from '../../lib/state';
import { createSystemInstructions } from '../../lib/prompts';
import { AudioRecorder } from '../../lib/audio-recorder';
import TiraFace from './TiraFace';

// Constants for modalities
const Modality = {
  AUDIO: 'AUDIO',
  TEXT: 'TEXT'
};

const VoiceChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [audioRecorder] = useState(() => new AudioRecorder());
  const { client, connected, connect, disconnect, setConfig, volume } = useLiveAPIContext();
  const user = useUser();
  const { current } = useAgent();

  // Detect when the agent is talking based on volume
  useEffect(() => {
    const threshold = 0.05;
    if (volume > threshold) {
      setIsTalking(true);
      setIsProcessing(false); // Stop processing when Tira starts talking
      const timeout = setTimeout(() => setIsTalking(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [volume]);

  // Listen for when Tira finishes talking
  useEffect(() => {
    const handleMessage = () => {
      setIsProcessing(false);
    };

    if (client) {
      client.on('message', handleMessage);
      return () => {
        client.off('message', handleMessage);
      };
    }
  }, [client]);

  // Set the configuration when component mounts or agent changes
  useEffect(() => {
    setConfig({
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: current.voice },
        },
      },
      systemInstruction: {
        parts: [
          {
            text: createSystemInstructions(current, user),
          },
        ],
      },
    });
  }, [setConfig, user, current]);

  // Audio buffer system for ultra-stable connection
  useEffect(() => {
    let lastSendTime = 0;
    let connectionStableTime = 0;
    let audioBuffer: string[] = [];
    const MIN_SEND_INTERVAL = 100; // Increased to 100ms for stability
    const CONNECTION_STABLE_DELAY = 1000; // Wait 1s after connection before sending
    
    const onData = (base64: string) => {
      // Basic checks first
      if (muted || !connected || client.status !== 'connected') {
        return;
      }
      
      const now = Date.now();
      
      // Ensure connection has been stable for at least 1 second
      if (connectionStableTime === 0) {
        connectionStableTime = now;
        return;
      }
      
      if (now - connectionStableTime < CONNECTION_STABLE_DELAY) {
        // Buffer audio during unstable period
        audioBuffer.push(base64);
        if (audioBuffer.length > 10) {
          audioBuffer = audioBuffer.slice(-5); // Keep only last 5 chunks
        }
        return;
      }
      
      // Throttle sends
      if (now - lastSendTime < MIN_SEND_INTERVAL) {
        return;
      }
      
      // Ultra-safe verification before sending
      if (!client || client.status !== 'connected') {
        console.debug('🔇 Client not ready, resetting connection timer');
        connectionStableTime = 0;
        audioBuffer = [];
        return;
      }
      
      // Send buffered audio first
      if (audioBuffer.length > 0) {
        try {
          const bufferedData = audioBuffer.splice(0, 3); // Send max 3 buffered chunks
          bufferedData.forEach(data => {
            client.sendRealtimeInput([{
              mimeType: 'audio/pcm;rate=16000',
              data: data,
            }]);
          });
        } catch (error) {
          console.debug('🔇 Failed to send buffered audio, stopping recorder');
          audioRecorder.stop();
          connectionStableTime = 0;
          audioBuffer = [];
          return;
        }
      }
      
      // Send current chunk
      try {
        client.sendRealtimeInput([{
          mimeType: 'audio/pcm;rate=16000',
          data: base64,
        }]);
        lastSendTime = now;
      } catch (error) {
        console.debug('🔇 Failed to send current audio, stopping recorder');
        audioRecorder.stop();
        connectionStableTime = 0;
        audioBuffer = [];
        return;
      }
    };
    
    if (connected && !muted && audioRecorder) {
      console.log('🎤 Starting audio recorder with buffer system');
      connectionStableTime = 0; // Reset timer
      audioBuffer = []; // Clear buffer
      audioRecorder.on('data', onData).start();
    } else {
      console.log('🔇 Stopping audio recorder and clearing buffer');
      connectionStableTime = 0;
      audioBuffer = [];
      audioRecorder.stop();
    }
    
    return () => {
      audioRecorder.off('data', onData);
      audioBuffer = [];
    };
  }, [connected, client, muted, audioRecorder]);

  // Listen for disconnection to stop audio recorder
  useEffect(() => {
    const handleClose = () => {
      console.log('🔌 WebSocket closed, stopping audio recorder');
      audioRecorder.stop();
    };

    const handleError = () => {
      console.log('❌ WebSocket error, stopping audio recorder');
      audioRecorder.stop();
    };

    if (client) {
      client.on('close', handleClose);
      client.on('error', handleError);
      
      return () => {
        client.off('close', handleClose);
        client.off('error', handleError);
      };
    }
  }, [client, audioRecorder]);

  // Advanced health check with connection heartbeat
  useEffect(() => {
    let healthCheckInterval: NodeJS.Timeout;
    let lastHeartbeat = Date.now();
    let heartbeatFails = 0;
    
    if (connected) {
      // Monitor client events to update heartbeat
      const updateHeartbeat = () => {
        lastHeartbeat = Date.now();
        heartbeatFails = 0;
      };
      
      client.on('open', updateHeartbeat);
      client.on('audio', updateHeartbeat);
      client.on('content', updateHeartbeat);
      
      healthCheckInterval = setInterval(() => {
        const now = Date.now();
        const timeSinceHeartbeat = now - lastHeartbeat;
        
        // Check if client status is still connected
        if (client.status !== 'connected') {
          console.log('🏥 Health check failed: client status is', client.status);
          audioRecorder.stop();
          return;
        }
        
        // Check for stale connection (no activity for 30 seconds)
        if (timeSinceHeartbeat > 30000) {
          heartbeatFails++;
          console.log(`💓 Heartbeat timeout (${heartbeatFails}/3) - ${timeSinceHeartbeat}ms since last activity`);
          
          if (heartbeatFails >= 3) {
            console.log('💔 Connection appears dead, stopping audio recorder');
            audioRecorder.stop();
            // Could trigger automatic reconnection here
          }
        }
      }, 5000); // Check every 5 seconds
      
      return () => {
        client.off('open', updateHeartbeat);
        client.off('audio', updateHeartbeat);
        client.off('content', updateHeartbeat);
        if (healthCheckInterval) {
          clearInterval(healthCheckInterval);
        }
      };
    }
    
    return () => {
      if (healthCheckInterval) {
        clearInterval(healthCheckInterval);
      }
    };
  }, [connected, client, audioRecorder]);

  // Initialize session when connected
  useEffect(() => {
    const beginSession = async () => {
      if (!connected) return;
      client.send(
        {
          text: 'Olá! Eu sou o Tira, seu guia de Tiradentes. Como posso te ajudar hoje?',
        },
        true
      );
    };
    beginSession();
  }, [client, connected]);

  const handleToggleChat = async () => {
    if (!isOpen) {
      setIsOpen(true);
      
      // Request microphone permission explicitly before connecting
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log('✅ Permissão de microfone concedida');
        
        if (!connected) {
          await connect();
        }
      } catch (error) {
        console.error('❌ Permissão de microfone negada:', error);
        alert('Para usar o chat de voz, é necessário permitir o acesso ao microfone. Por favor, recarregue a página e autorize o microfone.');
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
      if (connected) {
        disconnect();
      }
    }
  };

  const handleMicToggle = () => {
    setMuted(!muted);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : isTalking 
            ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        title={isOpen ? 'Fechar chat de voz' : 'Abrir chat com Tira'}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>

             {/* Voice Chat Interface */}
       {isOpen && (
         <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-xl border p-6 w-80">
           {/* Header */}
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center space-x-3">
               <TiraFace 
                 isTalking={isTalking} 
                 isListening={!muted && connected} 
                 isProcessing={false} 
               />
               <div>
                 <h3 className="font-semibold text-gray-800">Tira</h3>
                 <p className="text-sm text-gray-600">
                   {isTalking 
                     ? 'Falando...' 
                     : connected 
                     ? 'Online - Pronto para conversar!' 
                     : 'Desconectado'
                   }
                 </p>
               </div>
             </div>
             <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
               isTalking 
                 ? 'bg-blue-500 animate-pulse' 
                 : connected 
                 ? 'bg-green-500' 
                 : 'bg-gray-400'
             }`} />
           </div>

           {/* Description */}
           <div className="mb-4">
             <div className="bg-gray-100 rounded-lg p-3 mb-3">
               <p className="text-sm text-gray-700">
                 Uai! Bem-vindos à Estrada Real! Sou o Tira, seu guia de Tiradentes. 
                 Posso te ajudar com informações sobre turismo, gastronomia, hospedagem e muito mais!
               </p>
             </div>
           </div>

           {/* Control Buttons */}
           <div className="flex justify-center items-center space-x-4 mb-4">
             {/* Connect/Disconnect Button */}
             <button
               onClick={connected ? disconnect : connect}
               className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${
                 connected
                   ? 'bg-red-500 hover:bg-red-600 text-white'
                   : 'bg-green-500 hover:bg-green-600 text-white'
               }`}
               title={connected ? 'Parar conversa' : 'Iniciar conversa'}
             >
               {connected ? <Pause size={24} /> : <Play size={24} />}
             </button>

             {/* Mic Mute/Unmute Button */}
             <button
               onClick={handleMicToggle}
               disabled={!connected}
               className={`p-4 rounded-full transition-all duration-200 transform hover:scale-105 ${
                 !muted && connected
                   ? 'bg-blue-500 hover:bg-blue-600 text-white'
                   : 'bg-gray-500 hover:bg-gray-600 text-white'
               } ${!connected ? 'opacity-50' : ''}`}
               title={muted ? 'Ativar microfone' : 'Silenciar microfone'}
             >
               {!muted ? <Mic size={24} /> : <MicOff size={24} />}
             </button>
           </div>

           {/* Status indicators */}
           <div className="mb-4">
             {/* Show talking state */}
             {isTalking && (
               <div className="bg-blue-50 rounded-lg p-3 mb-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]" />
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                   <span className="text-sm text-blue-700 ml-2">Tira está falando...</span>
                 </div>
               </div>
             )}

             {/* Show listening state */}
             {connected && !muted && !isTalking && (
               <div className="bg-green-50 rounded-lg p-3 mb-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-sm text-green-700 font-medium">Escutando você...</span>
                 </div>
               </div>
             )}

             {/* Show muted state */}
             {connected && muted && (
               <div className="bg-gray-50 rounded-lg p-3 mb-3">
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-gray-500 rounded-full" />
                   <span className="text-sm text-gray-700 font-medium">Microfone silenciado</span>
                 </div>
               </div>
             )}
           </div>

           {/* Instructions */}
           <div className="text-center mb-4">
             <p className="text-xs text-gray-500">
               {!connected 
                 ? 'Clique em ▶️ para iniciar a conversa com o Tira'
                 : muted 
                 ? 'Clique no 🎤 para ativar o microfone' 
                 : 'Converse naturalmente com o Tira!'
               }
             </p>
           </div>

                       {/* Footer */}
            <div className="text-center">
              <div className="text-xs text-gray-400">
                Chat de voz em tempo real
              </div>
            </div>
                  </div>
       )}
     </>
   );
 };

export default VoiceChatButton;