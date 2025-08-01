import React, { useState, useEffect } from 'react';
import { Play, Mic, MicOff, X } from 'lucide-react';

interface DiagnosticChatProps {
  onClose: () => void;
}

const DiagnosticChat: React.FC<DiagnosticChatProps> = ({ onClose }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);
  const [micPermission, setMicPermission] = useState<string>('unknown');
  const [testResults, setTestResults] = useState<string[]>([]);

  const addTestResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  // Test voice synthesis
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      addTestResult(`📢 ${availableVoices.length} vozes encontradas`);
      
      // Find best Portuguese voice
      const ptBRVoices = availableVoices.filter(voice => 
        voice.lang.includes('pt-BR') || voice.lang.includes('pt')
      );
      
      if (ptBRVoices.length > 0) {
        const bestVoice = ptBRVoices.find(voice => 
          voice.name.toLowerCase().includes('luciana') ||
          voice.name.toLowerCase().includes('daniel') ||
          voice.name.toLowerCase().includes('natural')
        ) || ptBRVoices[0];
        
        setSelectedVoice(bestVoice);
        addTestResult(`✅ Melhor voz PT-BR: ${bestVoice.name}`);
      } else {
        addTestResult(`❌ Nenhuma voz PT-BR encontrada`);
      }
    };

    // Load voices immediately and also on voiceschanged event
    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  // Test microphone access
  useEffect(() => {
    const testMicrophone = async () => {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          setMicPermission('granted');
          addTestResult('✅ Permissão de microfone concedida');
          stream.getTracks().forEach(track => track.stop()); // Stop the stream
        } else {
          setMicPermission('not-supported');
          addTestResult('❌ getUserMedia não suportado');
        }
      } catch (error: any) {
        setMicPermission('denied');
        addTestResult(`❌ Erro de microfone: ${error.message}`);
      }
    };

    testMicrophone();
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'pt-BR';
      
      recognitionInstance.onstart = () => {
        addTestResult('🎤 Reconhecimento iniciado');
      };
      
      recognitionInstance.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          setTranscript(finalTranscript);
          addTestResult(`📝 Reconhecido: "${finalTranscript}"`);
          setIsListening(false);
        }
      };
      
      recognitionInstance.onerror = (event: any) => {
        addTestResult(`❌ Erro reconhecimento: ${event.error}`);
        setIsListening(false);
      };
      
      recognitionInstance.onend = () => {
        addTestResult('🛑 Reconhecimento finalizado');
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
      addTestResult('✅ Speech Recognition configurado');
    } else {
      addTestResult('❌ Speech Recognition não suportado');
    }
  }, []);

  const testVoice = () => {
    if (!selectedVoice) {
      addTestResult('❌ Nenhuma voz selecionada');
      return;
    }

    const text = 'Uai sô! Eu sou o Tira, seu guia de Tiradentes! Como tá?';
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.voice = selectedVoice;
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1.0;
    
    utterance.onstart = () => {
      addTestResult(`🔊 Falando com voz: ${selectedVoice.name}`);
    };
    
    utterance.onend = () => {
      addTestResult('✅ Fala concluída');
    };
    
    utterance.onerror = (event) => {
      addTestResult(`❌ Erro na fala: ${event.error}`);
    };
    
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const testMicrophone = () => {
    if (!recognition) {
      addTestResult('❌ Reconhecimento não disponível');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
        setTranscript('');
      } catch (error) {
        addTestResult(`❌ Erro ao iniciar: ${error}`);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">🔧 Diagnóstico de Chat de Voz</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            title="Fechar diagnóstico"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Voice Test */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">🗣️ Teste de Voz</h3>
          <div className="flex items-center space-x-2 mb-2">
            <select 
              value={selectedVoice?.name || ''} 
              onChange={(e) => {
                const voice = voices.find(v => v.name === e.target.value);
                setSelectedVoice(voice || null);
              }}
              className="border rounded px-2 py-1 flex-1"
            >
              <option value="">Selecione uma voz</option>
              {voices.map((voice, index) => (
                <option key={index} value={voice.name}>
                  {voice.name} ({voice.lang}) {voice.localService ? '(Local)' : '(Online)'}
                </option>
              ))}
            </select>
            <button 
              onClick={testVoice}
              disabled={!selectedVoice}
              className="bg-blue-500 text-white px-4 py-1 rounded disabled:bg-gray-300 flex items-center space-x-1"
            >
              <Play size={16} />
              <span>Testar</span>
            </button>
          </div>
        </div>

        {/* Microphone Test */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">🎤 Teste de Microfone</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded text-sm ${
              micPermission === 'granted' ? 'bg-green-100 text-green-800' :
              micPermission === 'denied' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              Permissão: {
                micPermission === 'granted' ? 'Concedida' :
                micPermission === 'denied' ? 'Negada' :
                'Desconhecida'
              }
            </span>
            <button 
              onClick={testMicrophone}
              disabled={!recognition}
              className={`px-4 py-1 rounded text-white flex items-center space-x-1 ${
                isListening ? 'bg-red-500' : 'bg-green-500'
              } disabled:bg-gray-300`}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
              <span>{isListening ? 'Parar' : 'Falar'}</span>
            </button>
          </div>
          {transcript && (
            <div className="bg-gray-100 p-2 rounded">
              <strong>Último reconhecimento:</strong> "{transcript}"
            </div>
          )}
        </div>

        {/* System Info */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">ℹ️ Informações do Sistema</h3>
          <div className="text-sm space-y-1">
            <div>Navegador: {navigator.userAgent.split(' ')[0]}</div>
            <div>Protocolo: {window.location.protocol}</div>
            <div>Idioma: {navigator.language}</div>
            <div>Speech Synthesis: {('speechSynthesis' in window) ? '✅' : '❌'}</div>
            <div>Speech Recognition: {('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) ? '✅' : '❌'}</div>
          </div>
        </div>

        {/* Test Results */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">📋 Log de Testes</h3>
          <div className="bg-gray-100 p-3 rounded h-32 overflow-y-auto text-sm font-mono">
            {testResults.map((result, index) => (
              <div key={index}>{result}</div>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <button 
            onClick={onClose}
            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            ✅ Fechar Diagnóstico
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
          >
            ↻ Recarregar Página
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticChat;