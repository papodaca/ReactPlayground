import { Component } from 'react';

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
      ]
    };
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

export default UserList;
