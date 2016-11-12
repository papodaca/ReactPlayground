import { Component, PropTypes } from 'react';

import I from '../elements/icon';
import Form from '../elements/form';
import Input from '../elements/input';
import UserApi from '../../api/users'
import UserForm from './userForm';

class NewUser extends Component {
  create(event) {
    event.preventDefault();

    UserApi.addUser(this.state.user);
    this.context.router.push("/users");
  }

  componentWillMount() {
    this.setState({
      user: {}
    });
  }

  handleChange(event) {
    let field = event.target.name,
        value = event.target.value;
    this.state.user[field] = value;
    return this.setState({user: this.state.user});
  }

  render() {
    return (
      <div>
        <h1><I icon="certificate" /> New User</h1>
        <div className="offset-md-2 col-md-5">
          <UserForm user={this.state.user} onChange={this.handleChange.bind(this)}/>
          <div className="offset-sm-2 col-sm-3">
            <button className="btn btn-success" onClick={this.create.bind(this)}><I icon="plus"/> Create</button>
          </div>
        </div>
      </div>
    );
  }

}

NewUser.contextTypes= {
  router: PropTypes.object.isRequired
};

export default NewUser;
