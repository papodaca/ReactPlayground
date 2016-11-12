import { Component, PropTypes } from 'react';

import I from '../elements/icon';
import Table from '../elements/table';
import UserApi from '../../api/users'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.tableConfig = {
      headers: [
        {
          label: 'Id',
          field: 'id'
        },
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'SSN',
          field: 'ssn'
        },
        {
          label: 'DOB',
          field: 'dob'
        },
        {
          label: 'Gender',
          field: 'gender'
        }
      ],
      actions: [
        {
          label: "Edit",
          icon: "pencil-square-o",
          color: "warning",
          handle: this.handleEdit.bind(this)
        },
        {
          label: "Delete",
          icon: "trash-o",
          color: "danger",
          handle: this.handleDelete.bind(this)
        }
      ]
    };
  }

  handleEdit(user, event) {
    this.context.router.push(`/users/${user.id}`);
  }

  handleDelete(user, event) {
    let result = confirm(`Are you suer you want to delete user: ${user.name}`);
    if(result) {
      UserApi.delete(user);
      this.componentWillMount();
    }
  }

  componentWillMount() {
    this.setState({
      users: UserApi.getAllUsers()
    });
  }

  render() {
    if(this.props.children) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <h1><I icon="user" /> User List</h1>
          <Table config={this.tableConfig} tdata={this.state.users} />
        </div>
      );
    }
  }

}

UserList.contextTypes= {
  router: PropTypes.object.isRequired
};

export default UserList;
