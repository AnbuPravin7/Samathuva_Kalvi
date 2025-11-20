import { createContext, Dispatch, SetStateAction } from 'react';
import { User, Language } from './types';

export type AppContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  user: User | null;
};

export const AppContext = createContext<AppContextType | null>(null);