const { fullName } = require("./names");
const { hobbies } = require("./hobbies");

const init = () => {
  const person = {
    fullName,
    hobbies,
  };
  return person;
};

let person = init();

console.log(person);
