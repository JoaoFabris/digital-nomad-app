export interface IStorage {
  setItem: (key: string, value: any) => Promise<void>;
  getItem: <IData>(key: string) => Promise<IData | null>; //no IData vai retornar um dado
  removeItem: (key: string) => Promise<void>;
}