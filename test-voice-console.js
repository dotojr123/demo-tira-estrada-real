// 🔧 SCRIPT DE TESTE DE VOZ - Cole no Console do Navegador (F12)
// Teste todas as funcionalidades de voz e reconhecimento

console.log('🚀 Iniciando testes de voz e reconhecimento...');

// 1. Teste de Síntese de Voz
function testVoiceSynthesis() {
  console.log('\n=== 🎤 TESTE 1: SÍNTESE DE VOZ ===');
  
  if (!('speechSynthesis' in window)) {
    console.error('❌ speechSynthesis não suportado');
    return;
  }
  
  console.log('✅ speechSynthesis disponível');
  
  // Aguardar vozes carregarem
  const loadVoices = () => {
    const voices = speechSynthesis.getVoices();
    console.log(`📢 ${voices.length} vozes encontradas:`);
    
    voices.forEach((voice, i) => {
      console.log(`  ${i + 1}. ${voice.name} (${voice.lang}) ${voice.localService ? '[Local]' : '[Online]'}`);
    });
    
    // Buscar vozes PT-BR
    const ptBRVoices = voices.filter(voice => 
      voice.lang.includes('pt-BR') || voice.lang.includes('pt')
    );
    
    console.log(`\n🇧🇷 ${ptBRVoices.length} vozes em português encontradas:`);
    ptBRVoices.forEach((voice, i) => {
      console.log(`  ${i + 1}. ${voice.name} (${voice.lang})`);
    });
    
    // Teste com melhor voz PT-BR
    if (ptBRVoices.length > 0) {
      const bestVoice = ptBRVoices.find(voice => 
        voice.name.toLowerCase().includes('luciana') ||
        voice.name.toLowerCase().includes('daniel') ||
        voice.name.toLowerCase().includes('natural')
      ) || ptBRVoices[0];
      
      console.log(`\n🎯 Testando com: ${bestVoice.name}`);
      
      const utterance = new SpeechSynthesisUtterance(
        'Uai sô! Eu sou o Tira, seu guia de Tiradentes! Tá funcionando a voz?'
      );
      
      utterance.voice = bestVoice;
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 1.0;
      
      utterance.onstart = () => console.log('🎵 Falando...');
      utterance.onend = () => console.log('✅ Fala concluída');
      utterance.onerror = (e) => console.error('❌ Erro na fala:', e);
      
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    } else {
      console.log('⚠️ Nenhuma voz em português encontrada, testando com voz padrão...');
      
      const utterance = new SpeechSynthesisUtterance('Testing default voice');
      utterance.onstart = () => console.log('🎵 Falando (voz padrão)...');
      utterance.onend = () => console.log('✅ Fala padrão concluída');
      utterance.onerror = (e) => console.error('❌ Erro na fala padrão:', e);
      
      speechSynthesis.speak(utterance);
    }
  };
  
  // Carregar vozes
  if (speechSynthesis.getVoices().length > 0) {
    loadVoices();
  } else {
    console.log('⏳ Aguardando vozes carregarem...');
    speechSynthesis.addEventListener('voiceschanged', loadVoices, { once: true });
  }
}

// 2. Teste de Reconhecimento de Voz
function testSpeechRecognition() {
  console.log('\n=== 🎤 TESTE 2: RECONHECIMENTO DE VOZ ===');
  
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    console.error('❌ Speech Recognition não suportado');
    return;
  }
  
  console.log('✅ Speech Recognition disponível');
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'pt-BR';
  recognition.maxAlternatives = 3;
  
  recognition.onstart = () => {
    console.log('🎤 Reconhecimento iniciado - FALE AGORA!');
  };
  
  recognition.onresult = (event) => {
    console.log('📝 Resultado recebido:');
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      const transcript = result[0].transcript;
      const confidence = result[0].confidence;
      
      console.log(`  ${result.isFinal ? 'FINAL' : 'INTERIM'}: "${transcript}" (confiança: ${confidence?.toFixed(2) || 'N/A'})`);
      
      if (result.isFinal) {
        console.log('✅ Reconhecimento final:', transcript);
      }
    }
  };
  
  recognition.onerror = (event) => {
    console.error('❌ Erro no reconhecimento:', event.error);
    console.error('📄 Detalhes:', event);
  };
  
  recognition.onend = () => {
    console.log('🛑 Reconhecimento finalizado');
  };
  
  // Teste de permissão de microfone
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      console.log('✅ Permissão de microfone concedida');
      stream.getTracks().forEach(track => track.stop());
      
      console.log('🎤 Iniciando reconhecimento em 2 segundos...');
      setTimeout(() => {
        try {
          recognition.start();
        } catch (error) {
          console.error('❌ Erro ao iniciar reconhecimento:', error);
        }
      }, 2000);
    })
    .catch(error => {
      console.error('❌ Erro de permissão de microfone:', error);
    });
}

// 3. Teste de Informações do Sistema
function testSystemInfo() {
  console.log('\n=== ℹ️ TESTE 3: INFORMAÇÕES DO SISTEMA ===');
  
  console.log('🌐 Navegador:', navigator.userAgent);
  console.log('🔒 Contexto seguro:', window.isSecureContext);
  console.log('🌍 Idioma:', navigator.language);
  console.log('📍 URL:', window.location.href);
  console.log('🔊 speechSynthesis:', 'speechSynthesis' in window);
  console.log('🎤 SpeechRecognition:', 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  console.log('📱 MediaDevices:', 'mediaDevices' in navigator);
  console.log('🎵 getUserMedia:', navigator.mediaDevices && 'getUserMedia' in navigator.mediaDevices);
}

// 4. Teste da API Gemini (se a chave estiver configurada)
async function testGeminiAPI() {
  console.log('\n=== 🤖 TESTE 4: API GEMINI ===');
  
  const apiKey = 'AIzaSyDaygJxRUww9V4OXp3s81lTFA-tyQqhqUA'; // Usando a chave do projeto
  
  if (!apiKey) {
    console.log('⚠️ Chave da API não configurada');
    return;
  }
  
  try {
    console.log('🔄 Testando conexão com Gemini...');
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Diga apenas "Oi, sou o Tira!" em uma linha.'
          }]
        }]
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      console.log('✅ Gemini funcionando! Resposta:', text);
    } else {
      console.error('❌ Erro na API:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Erro ao testar Gemini:', error);
  }
}

// EXECUTAR TODOS OS TESTES
async function runAllTests() {
  console.clear();
  console.log('🔧 DIAGNÓSTICO COMPLETO DO CHAT DE VOZ TIRA');
  console.log('============================================');
  
  testSystemInfo();
  
  setTimeout(() => {
    testVoiceSynthesis();
  }, 1000);
  
  setTimeout(() => {
    testSpeechRecognition();
  }, 3000);
  
  setTimeout(() => {
    testGeminiAPI();
  }, 8000);
  
  console.log('\n📋 INSTRUÇÕES:');
  console.log('1. ✅ Se os testes passarem, o problema pode estar na integração');
  console.log('2. ❌ Se algum teste falhar, há problema no navegador/sistema');
  console.log('3. 🎤 Quando solicitado, fale claramente: "Olá Tira, teste de voz"');
  console.log('4. 🔊 Verifique se o som está ativo para ouvir a voz');
  console.log('\n⚡ Para rodar testes individuais:');
  console.log('   testSystemInfo()');
  console.log('   testVoiceSynthesis()');
  console.log('   testSpeechRecognition()');
  console.log('   testGeminiAPI()');
}

// Expor funções globalmente para teste individual
window.testSystemInfo = testSystemInfo;
window.testVoiceSynthesis = testVoiceSynthesis;
window.testSpeechRecognition = testSpeechRecognition;
window.testGeminiAPI = testGeminiAPI;
window.runAllTests = runAllTests;

// Executar automaticamente
runAllTests();