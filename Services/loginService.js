const User = require("../Models/User");
const user=require('./UserService')

async function login(email, password) {
    const findUser = await User.findOne({ email: email, password });
    return findUser != null;
}
async function register(firstName,lastName,email,password,userType) {

    const existUser= await User.findOne({email:email})
    if(existUser){
        return false;
    }

    await user.createUser(firstName,lastName,email,password,userType)    
        return true
}




module.exports = { login, register }
