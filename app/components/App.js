import { Component } from 'react';
import styled from 'styled-components';

import Nav from './elements/nav'
import NavLink from './elements/navLink'
import I from './elements/icon'

class App extends Component {

  render() {
    return (
      <div>
        <Nav>
          <NavLink index to="/"><I icon="star" /> Main</NavLink>
          <NavLink to="/users"><I icon="user" /> Users</NavLink>
          <NavLink to="/about"><I icon="smile-o" /> About</NavLink>
        </Nav>
        <div>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </div>
      </div>
    );
  }

}

export default App;
