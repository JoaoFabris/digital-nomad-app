import RNAsyncStorage from '@react-native-async-storage/async-storage';
import { IStorage } from '../IStorage';

export const AsyncStorage: IStorage = {
  getItem: async (key) => {
    const item = await RNAsyncStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    await RNAsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key) => {
    await RNAsyncStorage.removeItem(key);
  },
};

//  Vantagens
// Persistência: Dados sobrevivem ao fechamento do app
// Assíncrono: Não bloqueia a UI
// Multiplataforma: Funciona no iOS e Android
// Type Safety: Tipagem garantida pela interface
// Flexibilidade: Fácil de substituir por outra implementação

// Este código implementa uma implementação concreta da interface IStorage usando o AsyncStorage do React Native. Vou explicar cada parte:

// 📋 Visão Geral
// O código cria um adaptador que implementa a interface IStorage utilizando o @react-native-async-storage/async-storage, 
// que é a biblioteca padrão para persistência de dados no React Native.
