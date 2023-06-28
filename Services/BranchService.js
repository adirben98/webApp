const Branch = require('../Models/Branch')

const createBranch = async (name,address) => {
    const branch = new Branch(
        {
         name:name,
         address:address,
        });
   
    
    return await branch.save()
}

const getBranch = async(name) =>{
    return await Branch.findOne({name:name})
}

const getBranches = async() =>{
    return await Branch.find({})
}

const updateBranch = async (name,address,) => {
    const branch = await getBranch(name);
    if (!branch)
        return null;
    branch.name=name
    branch.address=address
    
    await branch.save();
    return branch;
}

const deleteBranch = async (name) => {
    const branch = await getBranch(name);
    if (!branch)
        return null;
    await branch.deleteOne();
    return branch;
}

module.exports = {
    createBranch,
    getBranch,
    getBranches,
    updateBranch,
    deleteBranch
}
