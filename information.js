let name = 'Dean Leonard';
let campus = "Remote";
let cowsay = require("cowsay");

const myInfos = () => {
    console.log(cowsay.say({
        text : (`Hi my name is ${name}, and I am in the ${campus} campus`),
        e : "oO",
        T : "U ",

}))};
module.exports = myInfos;
