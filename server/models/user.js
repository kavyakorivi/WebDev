const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userid INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255) NOT NULL UNIQUE,
    psw VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userid)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all users in database
async function getAllusers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}

// Create  User - Registering
async function register(user) {
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (username, psw)
    VALUES ("${user.username}", "${user.psw}");
  `
  await con.query(sql);
  return await login(user);
}

// Read User -- login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].psw !== user.psw) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET username = "${user.username}"
    WHERE userid = ${user.userid}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userid = ${user.userid}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userid) {
    sql = `
      SELECT * FROM users
       WHERE userid = ${user.userid}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE username = "${user.username}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllusers, login, register, editUser, deleteUser};
