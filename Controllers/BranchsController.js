const BranchService = require('../Services/BranchService')

const createBranch = async (req,res) => {
  const newBranch = await BranchService.createBranch(req.params._id,req.params.name,req.params.address,req.params.Xcoordinate,req.params.Ycoordinate);
  res.json(newBranch)
}


const getBranches = async (req,res) => {
  const branch = await BranchService.getBranches();
  res.json(branch);
}

const getBranchById = async (req,res) => {
  const branch = await BranchService.getBranchById(req.params._id);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
}

const updateBranch = async (req,res) => {
  if (!req.params._id){
    res.status(400).json({message:'ID is required'});
  }

  const branch = await BranchService.updateBranch(req.params._id,req.params.name,req.params.address,req.params.Xcoordinate,req.params.Ycoordinate);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
};


const deleteBranch = async (req,res) => {
  const branch = await BranchService.deleteBranch(req.params._id);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.send();
}

module.exports = {
    createBranch,
    getBranchById,
    getBranches,
    updateBranch,
    deleteBranch

}