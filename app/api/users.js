import Chance from 'chance';

class Users {
  constructor() {
    this.chance = new Chance();
    let result = [];
    for(let ii=0;ii<20;ii++) {
      result.push(ii);
    }
    this.users = result.map(() => {
      return {
        id: this.chance.guid(),
        name: this.chance.name(),
        ssn: this.chance.ssn(),
        gender: this.chance.gender(),
        dob: this.chance.birthday({string: true})
      };
    });;
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    user.id = this.chance.guid();
    this.users.push(user);
  }
}

export default new Users();
