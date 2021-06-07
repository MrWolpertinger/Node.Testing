const XYZ = require('./people');
const { people, ages } = require('./people');



console.log(XYZ.people, XYZ.ages);
console.log(people);
console.log(ages);

const os = require('os');
console.log(os.platform());