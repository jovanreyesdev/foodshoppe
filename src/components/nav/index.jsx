import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Nav = () => {
  const [state, setState] = useState({
    activeItem: 'home',
  });

  const clickItem = (e, { name }) => setState({ activeItem: name });

  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={state.activeItem === 'home'}
        onClick={clickItem}
      />
      <Menu.Item
        name="messages"
        active={state.activeItem === 'messages'}
        onClick={clickItem}
      />
      <Menu.Item
        name="friends"
        active={state.activeItem === 'friends'}
        onClick={clickItem}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          active={state.activeItem === 'logout'}
          onClick={clickItem}
        />
        <Menu.Item
          name="logout"
          active={state.activeItem === 'logout'}
          onClick={clickItem}
        />
      </Menu.Menu>
    </Menu>
  )
};

export default Nav;
