import React from 'react';
import { Container, Typography, Button, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
       Gerenciador de Orçamento
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Controle suas finanças de forma simples e eficiente, adcione suas receitas, suas despesas e gerencie seus gastos. 
      </Typography>
      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Ir para o Dashboard
      </Button>
    </Container>
  );
};

export default Home;
