import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Despesa } from '../types';

interface DespesasProps {
  despesas: Despesa[];
  adicionarDespesa: (despesa: Despesa) => void;
  editarDespesa: (id: string, despesa: Despesa) => void;
  excluirDespesa: (id: string) => void;
}

const Despesas: React.FC<DespesasProps> = ({ despesas, adicionarDespesa, editarDespesa, excluirDespesa }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [editando, setEditando] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editando) {
      editarDespesa(editando, { descricao, valor: parseFloat(valor) });
      setEditando(null);
    } else {
      adicionarDespesa({ descricao, valor: parseFloat(valor) });
    }
    setDescricao('');
    setValor('');
  };

  return (
    <div>
      <h2>Despesas</h2>
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
        {despesas.map((despesa) => (
          <ListItem key={despesa.id}>
            <ListItemText primary={despesa.descricao} secondary={`R$ ${despesa.valor.toFixed(2)}`} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => {
                setEditando(despesa.id ?? null);
                setDescricao(despesa.descricao);
                setValor(despesa.valor.toString());
              }}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => excluirDespesa(despesa.id!)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Despesas;
