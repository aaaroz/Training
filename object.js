const representative = {
  name: "Morpheus",
  job: "leader",
  id: "18",
  createdAt: "18-11-02",
  contactDetails: {
    phone: "0980658",
    email: "morpheuns@mail.com",
  },
};

//object.keys
const keys = Object.keys(representative);
console.log("keys", keys);

//object.entries
const entries = Object.entries(representative);
console.log("entries", entries);
for (const [key, value] of Object.entries(representative)) {
  console.log(key, value);
}

//Object.values
const values = Object.values(representative);
console.log("values", values);

//Object.freeze
const CONST = Object.freeze({
  secretKey: "very secret",
});
console.log("freeze first", CONST);

CONST.secretKey = "test1";
CONST.hello = "test";
console.log("freeze second", CONST);

//Object.assign
// function parseStudent(student){
//     const newStudent={
//         firstName:"",
//         lastName:"",
//         age:null,
//     }
// }
