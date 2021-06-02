
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import Tabular from './components/Tabular';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
     <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Graph */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Graph />
              </Paper>
            </Grid>
            {/* Recent Tabular */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Tabular />
              </Paper>
            </Grid>
            
          </Grid>
          
        </Container>
      </main>
    </div>
  );
}

