const users = [
{
    userid: "rapunzel1",
    firstname: "rapunzel",
    lastname: "one",
    email: "one@gmail.com",
    psw: "psw11"
},
{
    userid: "ariel2",
    firstname: "ariel",
    lastname: "two",
    email: "two@gmail.com",
    psw: "psw22"
},
{
    userid: "cinderella3",
    firstname: "cinderella",
    lastname: "three",
    email: "three@gmail.com",
    psw: "psw33"
},
];


let getUsers = () => users;

module.exports = { getUsers };