import React from 'react';

import I from '../elements/icon';
import Form from '../elements/form';
import Input from '../elements/input';
import UserApi from '../../api/users';
import UserForm from './userForm';

class EditUser extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    "params.id": React.PropTypes.string
  }
  static contextTypes= {
    router: React.PropTypes.object.isRequired
  }

  contructor(props) {
    super(props);
    this.setState({
      user: UserApi.get(this.props.params.id)
    });
  }

  handleChange = (event) => {
    let field = event.target.name,
        value = event.target.value,
        user = this.state.user;
    user[field] = value;
    return this.setState({user: user});
  }

  updateUser = (event) => {
    event.preventDefault();

    UserApi.update(this.state.user);
    this.context.router.push("/users");
  }

  cancel = (event) => {
    event.preventDefault();
    this.context.router.push("/users");
  }

  render() {
    return (
      <div>
        <h1><I icon="certificate" /> New User</h1>
        <div className="offset-md-2 col-md-5">
          <UserForm
            user={this.state.user}
            onChange={this.handleChange}/>
          <div className="offset-sm-2 col-sm-10">
            <button
              className="btn btn-warning"
              onClick={this.updateUser}>
                <I icon="pencil-square-o"/> Update
            </button>  <button
              className="btn btn-default"
              onClick={this.cancel}>
              <I icon="ban"/> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default EditUser;
