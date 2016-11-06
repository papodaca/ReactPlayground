import Chance from 'chance';

class Users {
  getAllUsers() {
    let chance = new Chance();
    let result = [];
    for(let ii=0;ii<20;ii++) {
      result.push(ii);
    }
    return result.map(function() {
      return {
        id: chance.guid(),
        name: chance.name(),
        ssn: chance.ssn(),
        gender: chance.gender(),
        dob: chance.birthday({string: true})
      };
    });
  }
}

export default new Users();
