import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Recipe from './recipe'
import Menu from './menu'

import { palette, neutralLight } from './theme'

const theme = createMuiTheme({ palette })


const AppWrapper = styled.div`
  min-height: 100vh;
  font-family: 'Playfair Display', serif;
  font-size: calc(10px + 1.6vmin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E5E9EC;
`;

const Page = styled.div`
  max-width: 70%;
  min-width: 50%;
`;

const Users = () => <h2>Users</h2>;


class App extends Component {
  state = {
    menuOpen: false
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <AppWrapper>
            <Menu />
            <Page>
              <Route path="/" exact component={Recipe} />
              <Route path="/create/" component={Users} />
            </Page>
          </AppWrapper>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
