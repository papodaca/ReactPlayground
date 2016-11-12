import React from 'react';

import I from '../elements/icon';
import Table from '../elements/table';
import UserApi from '../../api/users';

class UserList extends React.Component {
  static contextTypes= {
    router: React.PropTypes.object.isRequired
  }
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }

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
          handle: this.handleEdit
        },
        {
          label: "Delete",
          icon: "trash-o",
          color: "danger",
          handle: this.handleDelete
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      users: UserApi.getAllUsers()
    });
  }

  handleEdit = (user, event) => {
    this.context.router.push(`/users/${user.id}`);
  }

  handleDelete = (user, event) => {
    let result = confirm(`Are you suer you want to delete user: ${user.name}`);
    if(result) {
      UserApi.delete(user);
      this.componentWillMount();
    }
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

export default UserList;
