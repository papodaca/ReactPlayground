import React from 'react';

class Form extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }

  render() {
    return <form>{this.props.children}</form>;
  }
}

export default Form;
