import { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import styled from 'styled-components';

const StyledSpan = styled.span`
  margin: 0 25px 0 0;
`;

class NavLink extends Component {
  static propTypes: {
    to: PropTypes.string.isRequired,
    index: PropTypes.bool
  }

  render() {
    let link;
    if(this.props.index) {
      link = <IndexLink to={this.props.to}>{this.props.children}</IndexLink>;
    } else {
      link = <Link to={this.props.to}>{this.props.children}</Link>;
    }
    return (
      <StyledSpan>
        {link}
      </StyledSpan>
    );
  }
}

export default NavLink;
