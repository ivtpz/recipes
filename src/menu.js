import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

export default Menu;