const student = { Name: "Manish", ID: 12, Class: 10, place: "Hyd", marks: 50 };
let { Name, ID, Class, ...rest } = student;
console.log(Name);
console.log(ID);
console.log(Class);
console.log(rest);