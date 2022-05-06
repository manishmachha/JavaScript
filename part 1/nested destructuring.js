const users = [
    { id: 1, Name: "manish", gender: "male" },
    { id: 2, Name: "ashish", gender: "male" },
    { id: 3, Name: "scooby", gender: "female" },
];

//to get entire objects in an array 
let [user1] = users;
console.log(user1);

//to use particular index from particular object
let [{ id }, { Name }, { gender }] = users;
console.log(id);
console.log(Name);
console.log(gender);