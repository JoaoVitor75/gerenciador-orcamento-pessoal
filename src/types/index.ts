export interface Receita {
  id?: string;
  descricao: string;
  valor: number;
}

export interface Despesa {
  id?: string;
  descricao: string;
  valor: number;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
}
