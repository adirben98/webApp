const Branch = require('../Models/Branch')

const createBranch = async (_id,name,address,Xcoordinate,Ycoordinate) => {
    const branch = new Branch(
        {
        _id:_id,
         name:name,
         address:address,
         Xcoordinate:Xcoordinate,
         Ycoordinate:Ycoordinate
        });
   
    
    return await branch.save()
}

const getBranchById = async(_id) =>{
    return await Branch.findOne(_id,_id)
}

const getBranches = async() =>{
    return await Branch.find({})
}

const updateBranch = async (_id,name,address,Xcoordinate,Ycoordinate) => {
    const branch = await getBranchById(_id);
    if (!branch)
        return null;
    branch.name=name
    branch.address=address
    branch.Xcoordinate=Xcoordinate
    branch.Ycoordinate=Ycoordinate
    await branch.save();
    return branch;
}

const deleteBranch = async (_id) => {
    const branch = await getBranchById(_id);
    if (!branch)
        return null;
    await branch.deleteOne();
    return branch;
}

module.exports = {
    createBranch,
    getBranchById,
    getBranches,
    updateBranch,
    deleteBranch
}
