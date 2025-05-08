const nameFunction = (firstName, lastName) => {
  let fullName = { firstName, lastName };
  return fullName;
};

const fullName = nameFunction("Mario", "Rossi");

module.exports = { fullName };
