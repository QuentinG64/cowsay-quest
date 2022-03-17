const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `My name is ${userInfo.name} and i am from ${userInfo.campus}`,
    e: "oO",
    T: "V ",
  })
);
