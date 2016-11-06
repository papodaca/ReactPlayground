import { Component } from 'react';
import styled from 'styled-components';

import I from '../../elements/icon';
import Table from '../../elements/table';
import UserApi from '../../../api/users'

class UserList extends Component {
  state: {
    users: []
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
      ]
    };
  }

  componentDidMount() {
    this.setState({
      users: UserApi.getAllUsers()
    });
  }

  render() {
    return (
      <div>
        <h1><I icon="user" /> User List</h1>
        <Table config={this.tableConfig} tdata={this.state ? this.state.users : []} />
      </div>
    );
  }

}

export default UserList;
