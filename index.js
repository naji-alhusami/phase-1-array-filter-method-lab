// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

const findMatching = (drivers, name) => {
  return drivers.filter(
    (driver) => (driver = name && driver.toUpperCase() === name.toUpperCase())
  );
};

const fuzzyMatch = (drivers, name) => {
  return drivers.filter((driver) => driver.startsWith(name));
};


const driversObj = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

const matchName = (driversObj, name) => {
  return driversObj.filter((driver) => driver.name === name);
};

console.log(matchName (driversObj, "Bobby"));
