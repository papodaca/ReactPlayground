import React from 'react';

import I from '../elements/icon';
import Form from '../elements/form';
import Input from '../elements/input';
import UserApi from '../../api/users';

class UserForm extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    "user.name": React.PropTypes.string,
    "user.ssn": React.PropTypes.string,
    "user.dob": React.PropTypes.string,
    "user.gender": React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  render() {
    return (
      <Form>
        <Input
          name="name"
          type="text"
          label="Name"
          placeholder="Enter Name"
          value={this.props.user.name}
          onChange={this.props.onChange}/>
        <Input
          name="ssn"
          type="text"
          label="SSN"
          placeholder="Enter SSN"
          value={this.props.user.ssn}
          onChange={this.props.onChange}/>
        <Input
          name="dob"
          type="date"
          label="DOB"
          placeholder="Enter DOB"
          value={this.props.user.dob}
          onChange={this.props.onChange}/>
        <Input
          name="gender"
          type="select"
          label="Gender"
          placeholder="Select Gender"
          value={this.props.user.gender}
          onChange={this.props.onChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Input>
      </Form>
    );
  }

}

export default UserForm;
