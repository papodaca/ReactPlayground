import { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import I from './icon'

class NavLink extends Component {

  render() {
    let link;
    if(this.props.index) {
      link = <IndexLink to={this.props.to} className="nav-link"><I icon={this.props.icon} /> {this.props.children}</IndexLink>;
    } else {
      link = <Link to={this.props.to} className="nav-link"><I icon={this.props.icon} /> {this.props.children}</Link>;
    }

    let LiClasses = "nav-item";

    if(this.context.router.isActive(this.props.to)) {
      LiClasses += " active"
    }

    return (
      <li className={LiClasses}>
        {link}
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object.isRequired
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  index: PropTypes.bool
};

export default NavLink;
