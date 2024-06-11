const createPerson = (callback) => {
  let person = [];
  callback(person, setName);
};

const setName = (person, callback) => {
  person.name = "Alice";
  callback(person, setAge);
};

const setAge = (person, callback) => {
  person.age = 100;
  callback(person, setJob);

};

const setJob = (person) => {
  person.job = "student";
  console.log(person);
};

createPerson((person, callback) => callback(person, setName));
// * person + setName 자체가 매개변수. person+name -> name+age -> age+job







const person = {};

person.name = "지원"

