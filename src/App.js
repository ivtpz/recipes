import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import Recipe from './recipe'
import RecipeList from './recipeList'
import Menu from './menu'
import RecipeEditor from './recipeEditor'
import { palette } from './theme'
import 'react-image-crop/dist/ReactCrop.css';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    authLink,
    new HttpLink({
      uri: 'http://localhost:5000/graphql'
    })
  ]),
  cache: new InMemoryCache()
});

const theme = createMuiTheme({ palette });

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
        <MuiThemeProvider theme={theme}>
          <Router>
            <AppWrapper>
              <Menu />
              <Page>
                <Route path="/" exact component={RecipeList} />
                <Route path="/recipe/:id" component={Recipe} />
                <Route path="/create/" component={RecipeEditor} />
                {/* TODO: make sure only orignal creator can edit recipes */}
              </Page>
            </AppWrapper>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
