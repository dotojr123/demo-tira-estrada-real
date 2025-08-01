# 🎤 Integração do Chat de Voz - Tira (Tiradentes)

## 📋 Visão Geral

Esta integração adiciona um sistema de chat de voz em tempo real ao projeto Estrada Real, permitindo que os usuários conversem com o "Tira", um guia virtual especializado em Tiradentes e região.

## ✨ Funcionalidades

- **Chat de Voz em Tempo Real**: Conversa por voz usando IA Gemini
- **Guia Especializado**: O Tira conhece profundamente Tiradentes, gastronomia, hospedagem e turismo
- **Interface Flotante**: Botão de chat que aparece em todas as páginas
- **Indicadores Visuais**: Mostra quando está conectado, ouvindo ou falando
- **Sotaque Mineiro**: O Tira fala com expressões típicas de Minas Gerais

## 🚀 Como Configurar

### 1. Obter API Key do Gemini

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em "Create API Key"
4. Copie a chave gerada

### 2. Configurar Variável de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e adicione sua API key:
   ```env
   VITE_GEMINI_API_KEY=sua_chave_api_aqui
   ```

### 3. Instalar e Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

## 🎯 Como Usar

1. **Acessar o Chat**: Clique no botão de chat flutuante (💬) no canto inferior direito
2. **Conectar**: O sistema conecta automaticamente ao abrir
3. **Conversar**: Clique no microfone e comece a falar
4. **Ouvir**: O Tira responderá por voz com informações sobre Tiradentes

## 🤠 Sobre o Tira

O Tira é um guia virtual especializado que conhece:

- **Gastronomia**: 366 estabelecimentos mapeados (restaurantes, bares, lanchonetes, cafeterias)
- **Hospedagem**: 183 opções (pousadas, hotéis, pousos)
- **Turismo**: 22 pontos turísticos principais
- **História**: Contexto histórico e cultural da região
- **Clima**: Melhor época para visitar e informações sazonais

### Características do Tira:
- Fala com sotaque mineiro autêntico
- Usa expressões como "uai", "trem bão", "pão de queijo"
- Trata o usuário por "procê"
- É hospitaleiro e entusiasmado sobre a cidade

## 🛠️ Arquitetura Técnica

### Componentes Principais:

```
src/
├── lib/
│   ├── presets/agents.ts      # Definição do agente Tira
│   ├── state.ts               # Estado global (Zustand)
│   ├── prompts.ts             # Sistema de instruções
│   ├── audio-streamer.ts      # Streaming de áudio
│   ├── genai-live-client.ts   # Cliente Gemini Live API
│   ├── constants.ts           # Constantes do sistema
│   └── utils.ts               # Utilitários
├── contexts/
│   └── LiveAPIContext.tsx     # Context da API Live
├── hooks/
│   └── media/
│       └── use-live-api.ts    # Hook principal da API
└── components/
    └── chat/
        ├── ChatProvider.tsx   # Provider do chat
        └── VoiceChatButton.tsx # Botão e interface do chat
```

### Tecnologias Utilizadas:

- **@google/genai**: Google Gemini API para IA conversacional
- **zustand**: Gerenciamento de estado
- **eventemitter3**: Sistema de eventos
- **Web Audio API**: Processamento de áudio
- **Speech Synthesis API**: Síntese de voz (fallback)

## 🔧 Personalização

### Modificar o Agente

Edite `src/lib/presets/agents.ts` para personalizar:
- Personalidade do Tira
- Voz utilizada
- Cor do avatar
- Base de conhecimento

### Ajustar Interface

Modifique `src/components/chat/VoiceChatButton.tsx` para:
- Mudar posição do botão
- Alterar design da interface
- Adicionar novas funcionalidades

## 🐛 Solução de Problemas

### Chat não conecta
- Verifique se a API key está configurada corretamente
- Confirme se a chave tem permissões para Gemini Live API
- Verifique conexão com internet

### Microfone não funciona
- Confirme permissões do navegador para microfone
- Teste em HTTPS (necessário para Web Audio API)
- Verifique se o navegador suporta Web Audio API

### Áudio não reproduz
- Confirme permissões de áudio do navegador
- Teste em diferentes navegadores
- Verifique se há bloqueadores de pop-up

## 📱 Compatibilidade

- **Navegadores**: Chrome 66+, Firefox 60+, Safari 14+, Edge 79+
- **Dispositivos**: Desktop, tablet, mobile
- **HTTPS**: Necessário para funcionalidades de microfone

## 🔐 Segurança

- API key fica no frontend (configure limites na Google Cloud Console)
- Não armazena conversas ou dados pessoais
- Comunicação criptografada via HTTPS

## 📞 Suporte

Para dúvidas sobre a integração:
1. Verifique a documentação da [Google Gemini API](https://ai.google.dev/docs)
2. Consulte os logs do console do navegador
3. Teste com uma nova API key se necessário

---

**Desenvolvido para o projeto Estrada Real** 🛤️