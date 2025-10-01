// ReactotronConfig.js
import Reactotron from "reactotron-react-native";

console.log("🔧 ReactotronConfig.js sendo executado...");

if (__DEV__) {
  console.log("🔧 Modo desenvolvimento detectado");
  
  try {
    const tron = Reactotron
      .configure({
        name: "Digital Nomad App",
        host: "10.0.2.2", // ⭐ MUDANÇA AQUI: IP especial para emulador Android
        port: 9090,
      })
      .useReactNative({
        asyncStorage: false,
        networking: {
          ignoreUrls: /symbolicate/,
        },
        editor: false,
        errors: { veto: (stackFrame) => false },
        overlay: false,
      })
      .connect();

    console.log("🔧 Reactotron configurado, tentando conectar em 10.0.2.2:9090...");

    // Limpa o Reactotron
    tron.clear();

    // Torna disponível globalmente
    console.tron = tron;

    // Logs de teste imediatos
    tron.log("🚀 Reactotron conectado com sucesso!");
    tron.display({
      name: "Conexão Estabelecida",
      value: { 
        timestamp: new Date().toISOString(),
        host: "10.0.2.2",
        port: 9090,
        status: "connected"
      },
      preview: "Reactotron funcionando"
    });

    console.log("✅ Reactotron configured successfully");

    // Teste a cada 10 segundos
    setInterval(() => {
      if (tron) {
        tron.log(`⏰ Teste periódico - ${new Date().toLocaleTimeString()}`);
      }
    }, 10000);

  } catch (error) {
    console.error("❌ Erro ao configurar Reactotron:", error);
  }
} else {
  console.log("🔧 Não está em modo desenvolvimento");
}