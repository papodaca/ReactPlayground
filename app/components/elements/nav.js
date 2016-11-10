import { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="container">
          <ul className="nav navbar-nav">
            {this.props.children}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
