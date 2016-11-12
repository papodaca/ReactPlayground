import { Component, PropTypes } from 'react';

class I extends Component {
  propTypes: {
    icon: PropTypes.string
  }
  render() {
    let iconClass = `fa fa-${this.props.icon}`;
    return <i className={iconClass}></i>;
  }
}

export default I;
