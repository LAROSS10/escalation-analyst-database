const faker = require("faker");

let randomName = faker.name.findName();
let amount = faker.finance.amount();
let department = faker.commerce.department();
let email = faker.internet.email();
let password = faker.internet.password();

fakeData = [randomName, amount, department, email, password];

var populateData = function() {
  for (var i = 0; i < 5; i++) {
    console.log(fakeData[i]);
  }
};

populateData();
