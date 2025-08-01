/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GenAILiveClient } from '../../lib/genai-live-client';
import { LiveConnectConfig } from '@google/genai';
import { AudioStreamer } from '../../lib/audio-streamer';
import { audioContext } from '../../lib/utils';
// VolMeterWorket will be loaded dynamically from public folder
import { DEFAULT_LIVE_API_MODEL } from '../../lib/constants';

export type UseLiveApiResults = {
  client: GenAILiveClient;
  setConfig: (config: LiveConnectConfig) => void;
  config: LiveConnectConfig;

  connect: () => Promise<void>;
  disconnect: () => void;
  connected: boolean;

  volume: number;
};

export function useLiveApi({
  apiKey,
  model = DEFAULT_LIVE_API_MODEL,
}: {
  apiKey: string;
  model?: string;
}): UseLiveApiResults {
  const client = useMemo(() => new GenAILiveClient(apiKey, model), [apiKey]);

  const audioStreamerRef = useRef<AudioStreamer | null>(null);

  const [volume, setVolume] = useState(0);
  const [connected, setConnected] = useState(false);
  const [config, setConfig] = useState<LiveConnectConfig>({});

  // register audio for streaming server -> speakers
  useEffect(() => {
    if (!audioStreamerRef.current) {
      audioContext({ id: 'audio-out' }).then(async (audioCtx: AudioContext) => {
        audioStreamerRef.current = new AudioStreamer(audioCtx);
        
        try {
          // Load worklet directly from public folder
          await audioCtx.audioWorklet.addModule('/worklets/vol-meter.js');
          
          const worklet = new AudioWorkletNode(audioCtx, 'vu-meter');
          worklet.port.onmessage = (ev: any) => {
            setVolume(ev.data.volume);
          };
          
          // Connect worklet to the audio context for volume monitoring
          audioStreamerRef.current!.gainNode.connect(worklet);
          
          // Successfully added worklet
        } catch (err) {
          console.error('Error adding worklet:', err);
        }
      });
    }
  }, [audioStreamerRef]);

  useEffect(() => {
    const onOpen = () => {
      setConnected(true);
    };

    const onClose = () => {
      setConnected(false);
    };

    const stopAudioStreamer = () => {
      if (audioStreamerRef.current) {
        audioStreamerRef.current.stop();
      }
    };

    const onAudio = (data: ArrayBuffer) => {
      if (audioStreamerRef.current) {
        audioStreamerRef.current.addPCM16(new Uint8Array(data));
      }
    };

    // Bind event listeners
    client.on('open', onOpen);
    client.on('close', onClose);
    client.on('interrupted', stopAudioStreamer);
    client.on('audio', onAudio);

    return () => {
      // Clean up event listeners
      client.off('open', onOpen);
      client.off('close', onClose);
      client.off('interrupted', stopAudioStreamer);
      client.off('audio', onAudio);
    };
  }, [client]);

  const connect = useCallback(async () => {
    if (!config) {
      throw new Error('config has not been set');
    }
    
    // Ensure clean disconnect before reconnecting
    try {
      client.disconnect();
    } catch (error) {
      console.debug('Error during disconnect before connect:', error);
    }
    
    // Wait a bit before reconnecting to avoid race conditions
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      await client.connect(config);
      console.log('✅ Successfully connected to Live API');
    } catch (error) {
      console.error('❌ Failed to connect to Live API:', error);
      setConnected(false);
      throw error;
    }
  }, [client, setConnected, config]);

  const disconnect = useCallback(async () => {
    console.log('🔌 Disconnecting from Live API...');
    try {
      client.disconnect();
    } catch (error) {
      console.debug('Error during disconnect:', error);
    }
    setConnected(false);
  }, [setConnected, client]);

  return {
    client,
    config,
    setConfig,
    connect,
    connected,
    disconnect,
    volume,
  };
}