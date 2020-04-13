import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import auth0 from 'auth0-js';


const MenuIconContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const InvisibleLink = styled(Link)`
  text-decoration: none;
`;

const routes = [
  { link: '/', text: 'Home', key: 'home', Icon: HomeIcon },
  { link: '/create', text: 'New Recipe', key: 'newRecipe', Icon: EditIcon }
]

class Menu extends Component {
  state = {
    open: false
  }
  constructor(props) {
    super(props);
    this.auth0 = new auth0.WebAuth({
      domain: 'aita.eu.auth0.com',
      clientID: 'GXGftYcPhEYU0KXNs8v1gK9oCP7PRaSP',
      redirectUri: window.location.origin,
      responseType: 'token id_token',
      scope: 'openid profile email'
    });

    this.storeToken();

  }

  storeToken = () => {
    const { location: { hash } } = this.props
    if (hash) {
      this.auth0.parseHash({ hash }, (err, result) => {
        if (result) {
          localStorage.setItem('token', result.idToken);
        }
        // TODO: fix this  vv
        // this.props.history.replace(window.location.pathname)
      });
    }
  }

  login = () => {
    this.auth0.authorize();
  }

  render() {
    return (
      <>
        <Drawer open={this.state.open} onClose={() => this.setState({ open: false })}>
          <List>
            {routes.map(({ link, text, key }) => (
              <InvisibleLink to={link}>
                <ListItem button key={key}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
              </InvisibleLink>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button onClick={this.login}>
              <ListItemIcon><UserIcon /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Drawer>
        <MenuIconContainer>
          <IconButton
            onClick={() => this.setState({ open: true })}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </MenuIconContainer>
      </>
    )
  }
}

export default withRouter(Menu);