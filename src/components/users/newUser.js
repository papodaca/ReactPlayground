import React from 'react';

import I from '../elements/icon';
import Form from '../elements/form';
import Input from '../elements/input';
import UserApi from '../../api/users';
import UserForm from './userForm';

class NewUser extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.setState({
      user: {}
    });
  }

  handleChange = (event) => {
    let field = event.target.name,
        value = event.target.value,
        user = this.state.user;
    user[field] = value;
    return this.setState({user: user});
  }

  createUser = (event) => {
    event.preventDefault();

    UserApi.addUser(this.state.user);
    this.context.router.push("/users");
  }

  render() {
    return (
      <div>
        <h1><I icon="certificate" /> New User</h1>
        <div className="offset-md-2 col-md-5">
          <UserForm user={this.state.user} onChange={this.handleChange}/>
          <div className="offset-sm-2 col-sm-3">
            <button className="btn btn-success" onClick={this.createUser}><I icon="plus"/> Create</button>
          </div>
        </div>
      </div>
    );
  }

}

export default NewUser;
