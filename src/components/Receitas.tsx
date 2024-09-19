import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Receita } from '../types';

interface ReceitasProps {
  receitas: Receita[];
  adicionarReceita: (receita: Receita) => void;
  editarReceita: (id: string, receita: Receita) => void;
  excluirReceita: (id: string) => void;
}

const Receitas: React.FC<ReceitasProps> = ({ receitas, adicionarReceita, editarReceita, excluirReceita }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [editando, setEditando] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editando) {
      editarReceita(editando, { descricao, valor: parseFloat(valor) });
      setEditando(null);
    } else {
      adicionarReceita({ descricao, valor: parseFloat(valor) });
    }
    setDescricao('');
    setValor('');
  };

  return (
    <div>
      <h2>Receitas</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <TextField
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <Button type="submit">{editando ? 'Editar' : 'Adicionar'}</Button>
      </form>
      <List>
        {receitas.map((receita) => (
          <ListItem key={receita.id}>
            <ListItemText primary={receita.descricao} secondary={`R$ ${receita.valor.toFixed(2)}`} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => {
                setEditando(receita.id ?? null);
                setDescricao(receita.descricao);
                setValor(receita.valor.toString());
              }}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => excluirReceita(receita.id!)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Receitas;
