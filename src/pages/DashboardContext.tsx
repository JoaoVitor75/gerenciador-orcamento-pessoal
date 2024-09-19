import React, { createContext, useState, useContext } from 'react';
import { Receita, Despesa } from '../types';

interface DashboardContextType {
  receitas: Receita[];
  despesas: Despesa[];
  setReceitas: React.Dispatch<React.SetStateAction<Receita[]>>;
  setDespesas: React.Dispatch<React.SetStateAction<Despesa[]>>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  return (
    <DashboardContext.Provider value={{ receitas, despesas, setReceitas, setDespesas }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
