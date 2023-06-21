const User = require('../Models/User');


async function createUser(firstName,lastName,email,password,userType){
    const user = new User(
        {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password

        });
    if (userType)
        user.userType=userType
    
    return await user.save()
}

const getUser = async(email) =>{
    return await User.findOne({email:email})
}

const getUsers = async() =>{
    return await User.find({})
}

const updateUser = async ( firstName,lastName,email,password) => {
    const user = await getUser(email);
    if (!user)
        return null;
        user.firstName=firstName,
        user.lastName=lastName,
        user.email=email,
        user.password=password
    await user.save();
    return user;
}

const deleteUser = async (email) => {
    const user = await getUser(email);
    if (!user)
        return null;
    await user.deleteOne();
    return user;
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}