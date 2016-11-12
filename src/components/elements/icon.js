import React from 'react';

class I extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string
  }
  render() {
    let iconClass = `fa fa-${this.props.icon}`;
    return <i className={iconClass} />;
  }
}

export default I;
