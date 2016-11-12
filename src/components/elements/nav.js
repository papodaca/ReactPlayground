import React from 'react';

class Nav extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }

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
