import { Component, PropTypes } from 'react';

import I from '../elements/icon';
import Form from '../elements/form';
import Input from '../elements/input';
import UserApi from '../../api/users'
import UserForm from './userForm';

class EditUser extends Component {
  update(event) {
    event.preventDefault();

    UserApi.update(this.state.user);
    this.context.router.push("/users");
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push("/users");
  }

  componentWillMount() {
    this.setState({
      user: UserApi.get(this.props.params.id)
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
          <UserForm
            user={this.state.user}
            onChange={this.handleChange.bind(this)}/>
          <div className="offset-sm-2 col-sm-10">
            <button
              className="btn btn-warning"
              onClick={this.update.bind(this)}>
                <I icon="pencil-square-o"/> Update
            </button>  <button
              className="btn btn-default"
              onClick={this.cancel.bind(this)}>
              <I icon="ban"/> Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

}

EditUser.contextTypes= {
  router: PropTypes.object.isRequired
};

export default EditUser;
