const BranchService = require('../Services/BranchService')

const createBranch = async (req,res) => {
  const newBranch = await BranchService.createBranch(req.body.name,req.body.address);
  res.json(newBranch)
}


const getBranches = async (req,res) => {
  const branch = await BranchService.getBranches();
  if(!branch){
    return res.status(404).json({errors:['Branch not found']});
  }

  res.json(branch);
}

const getBranch = async (req,res) => {
  const branch = await BranchService.getBranch(req.body.name);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
}

const updateBranch = async (req,res) => {
  if (!req.body.name){
    res.status(400).json({message:'ID is required'});
  }

  const branch = await BranchService.updateBranch(req.body.name,req.body.address);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
};

const deleteBranch = async (req,res) => {
  const branch = await BranchService.deleteBranch(req.body.name);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
}

module.exports = {
    createBranch,
    getBranch,
    getBranches,
    updateBranch,
    deleteBranch

}
