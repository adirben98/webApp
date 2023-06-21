const BranchService = require('../Services/BranchService')

const createBranch = async (req,res) => {
  const newBranch = await BranchService.createBranch(req.body._id,req.body.name,req.body.address,req.body.Xcoordinate,req.body.Ycoordinate);
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
  const branch = await BranchService.getBranchById(req.params.name);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
}

const updateBranch = async (req,res) => {
  if (!req.body._id){
    res.status(400).json({message:'ID is required'});
  }

  const branch = await BranchService.updateBranch(req.body._id,req.body.name,req.body.address,req.body.Xcoordinate,req.body.Ycoordinate);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.json(branch);
};

const deleteBranch = async (req,res) => {
  const branch = await BranchService.deleteBranch(req.params.name);
  if (!branch){
    return res.status(404).json({errors:['Branch not found']});
  }
  res.send();
}

module.exports = {
    createBranch,
    getBranch,
    getBranches,
    updateBranch,
    deleteBranch

}