import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' render={() => <Homepage />}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
