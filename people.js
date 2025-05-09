const { nameFunction } = require("./names");
const { hobbiesFunction } = require("./hobbies");

const init = () => {
  return {
    fullName: nameFunction("mario", "rossi"),
    hobbies: hobbiesFunction("calcio", "tennis", "golf"),
  };
};

console.log(init());
