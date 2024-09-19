import React from 'react';
import { Container, Typography, Paper, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(2),
  },
}));

const Sobre: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4" component="h1" className={classes.title}>
          Sobre o Gerenciador de Orçamento Pessoal
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Me chamo João Vitor Ferreira, tenho 20 anos, sou academico do centro universitario da fundacao assis gurgacz 
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Trabalho gerenciando dados em uma granja
        </Typography>
        <Typography variant="body1">
          Este projeto foi desenvolvido com tecnologias modernas como React e TypeScript, nosso aplicativo oferece uma experiência de usuário suave e responsiva em qualquer dispositivo.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Sobre;
