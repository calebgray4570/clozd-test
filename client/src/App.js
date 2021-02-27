import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getUsers } from './actions/users';

import Table from './components/Table';
import User from './components/User';


const App = () =>{
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page + 1));
  }, [page, dispatch]);

  return (
    <Container maxWidth="lg" >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Clozd Test</Typography>
    </AppBar>
    <Router>
      <Switch>
        <Route exact path="/">
          <Table page={page} setPage={setPage}></Table>
        </Route>
        <Route path="/:id">
          <User></User>
        </Route>
      </Switch>
    </Router>
    </Container>
  );
};



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  appBar: {
    borderRadius: 4,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
  }
});

export default App;
