# Deploy Instructions - Demo Tira Estrada Real

## 🚀 Deploy na Vercel

### 1. Configuração do Repositório GitHub
- Repository: `demo-tira-estrada-real`
- Branch: `master`
- Público (para deploy gratuito)

### 2. Variáveis de Ambiente Necessárias

Na Vercel, vá em **Settings > Environment Variables** e adicione:

```
VITE_GOOGLE_GENAI_API_KEY = sua_chave_do_google_gemini_api
```

### 3. Configurações de Build da Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Domínio Sugerido
```
demo-tira-estrada-real.vercel.app
```

## 🎤 Funcionalidades do Chat de Voz

- ✅ Chat de voz em tempo real com Tira
- ✅ Google Gemini Live API integrada
- ✅ Streaming de áudio bidirecional
- ✅ Controles de conectar/desconectar
- ✅ Mute/unmute do microfone
- ✅ Interface responsiva

## 📝 Notas Importantes

1. **API Key**: Obtenha sua chave em [Google AI Studio](https://aistudio.google.com/)
2. **HTTPS**: O chat de voz requer HTTPS (Vercel fornece automaticamente)
3. **Microfone**: O navegador pedirá permissão para usar o microfone
4. **Compatibilidade**: Funciona melhor no Chrome/Edge

## 🔧 Desenvolvimento Local

```bash
npm install
npm run dev
```

Certifique-se de ter o arquivo `.env` com:
```
VITE_GOOGLE_GENAI_API_KEY=sua_chave_aqui
```