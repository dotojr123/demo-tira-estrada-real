/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from 'react';
import { LiveAPIProvider } from '../../contexts/LiveAPIContext';

interface ChatProviderProps {
  children: ReactNode;
}

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyDaygJxRUww9V4OXp3s81lTFA-tyQqhqUA';

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  console.log('ChatProvider - API Key disponível:', !!API_KEY);
  
  if (!API_KEY) {
    console.error('❌ Gemini API key não encontrada! Chat de voz não funcionará.');
    console.log('📝 Configure VITE_GEMINI_API_KEY no arquivo .env');
  } else {
    console.log('✅ Gemini API key configurada! Chat de voz pronto para usar.');
  }

  return (
    <LiveAPIProvider apiKey={API_KEY}>
      {children}
    </LiveAPIProvider>
  );
};

export default ChatProvider;