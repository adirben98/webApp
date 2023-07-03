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

const getUser = async(existingEmail) =>{
    return await User.findOne({email:existingEmail})
}

const getUsers = async() =>{
    return await User.find({})
}

const updateUser = async (existingEmail,firstName,lastName, userType) => {
    const user = await getUser(existingEmail);
    if (!user)
        return null;
        user.firstName=firstName,
        user.lastName=lastName,
        user.userType=userType

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
async function createAdmin(firstName,lastName,email,password,userType){
    const admin = new User(
        {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password

        });
    if (userType)
        admin.userType=userType
    
    return await admin.save()
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createAdmin
}
