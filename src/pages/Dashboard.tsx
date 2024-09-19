import React from 'react';
import { Container, Grid, Paper, Typography, makeStyles, Theme } from '@material-ui/core';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';
import { useDashboard } from '../pages/DashboardContext';
import { Receita, Despesa } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  totalPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  amount: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  positive: {
    color: theme.palette.success.main,
  },
  negative: {
    color: theme.palette.error.main,
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const { receitas, despesas, setReceitas, setDespesas } = useDashboard();

  const adicionarReceita = (receita: Receita) => {
    setReceitas(prevReceitas => [...prevReceitas, { ...receita, id: Date.now().toString() }]);
  };

  const editarReceita = (id: string, novaReceita: Receita) => {
    setReceitas(prevReceitas => 
      prevReceitas.map(r => r.id === id ? { ...novaReceita, id } : r)
    );
  };

  const excluirReceita = (id: string) => {
    setReceitas(prevReceitas => prevReceitas.filter(r => r.id !== id));
  };

  const adicionarDespesa = (despesa: Despesa) => {
    setDespesas(prevDespesas => [...prevDespesas, { ...despesa, id: Date.now().toString() }]);
  };

  const editarDespesa = (id: string, novaDespesa: Despesa) => {
    setDespesas(prevDespesas => 
      prevDespesas.map(d => d.id === id ? { ...novaDespesa, id } : d)
    );
  };

  const excluirDespesa = (id: string) => {
    setDespesas(prevDespesas => prevDespesas.filter(d => d.id !== id));
  };

  const totalReceitas = receitas.reduce((total, r) => total + r.valor, 0);
  const totalDespesas = despesas.reduce((total, d) => total + d.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.title}>Dashboard Financeiro</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.totalPaper} elevation={3}>
              <Typography variant="h6">Total de Receitas</Typography>
              <Typography variant="h4" className={`${classes.amount} ${classes.positive}`}>
                R$ {totalReceitas.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.totalPaper} elevation={3}>
              <Typography variant="h6">Total de Despesas</Typography>
              <Typography variant="h4" className={`${classes.amount} ${classes.negative}`}>
                R$ {totalDespesas.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.totalPaper} elevation={3}>
              <Typography variant="h6">Saldo</Typography>
              <Typography variant="h4" className={`${classes.amount} ${saldo >= 0 ? classes.positive : classes.negative}`}>
                R$ {saldo.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper} elevation={3}>
              <Receitas
                receitas={receitas}
                adicionarReceita={adicionarReceita}
                editarReceita={editarReceita}
                excluirReceita={excluirReceita}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper} elevation={3}>
              <Despesas
                despesas={despesas}
                adicionarDespesa={adicionarDespesa}
                editarDespesa={editarDespesa}
                excluirDespesa={excluirDespesa}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
