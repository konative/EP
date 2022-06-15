import { closeClientConn, getColl } from "../../db/conn.js";

//create user function
async function createUser(email, password) {
  try {
    const col = await getColl("Users");
    var createdUser = await col.insertOne({
      email,
      password,
    });
    //await closeClientConn();
    //console.log(createdUser);
    return createdUser.insertedId;
  } catch (error) {
    //await closeClientConn();
    if (error.code === 11000) {
      return { success: false, message: "Duplicate Email", error };
    } else {
      //console.log(createdUser);
      //console.log(error);
      return { success: false, message: "Test", error };
    }
  }
}

//get user function
function getUser() {}
//update user function
function updateUser() {}
//delete user function
function deleteUser() {}

//const closeConnection = closeClientConn

export { createUser, getUser, updateUser, deleteUser };
