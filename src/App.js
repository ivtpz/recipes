import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Recipe from './recipe'
import RecipeList from './recipeList'
import Menu from './menu'
import RecipeEditor from './recipeEditor'

import { palette } from './theme'

const theme = createMuiTheme({ palette });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

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


class App extends Component {
  state = {
    menuOpen: false
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <Router>
            <AppWrapper>
              <Menu />
              <Page>
                <Route path="/" exact component={RecipeList} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/create/" component={RecipeEditor} />
              </Page>
            </AppWrapper>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
