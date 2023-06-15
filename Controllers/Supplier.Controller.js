const SupplierService = require('../Services/SupplierService');

const createSupplier = async (req,res) => {
    const newSupplier = await SupplierService.createSupplier(req.body.name,req.body.adress);
    res.json(newSupplier);
}

const getSupplierByName = async (req,res) => {
    const Supplier = await SupplierService.getSupplierByName(req.params.name);
    if(!Supplier){
        return res.status(404).json({errors:['Supplier not found']});
    }
    res.json(Supplier);
}

const getSuppliers = async (req,res) => {
    const Suppliers = await SupplierService.getSuppliers();
    res.json(Suppliers);
}

const updateSupplier = async (req,res) => {
    if (!req.body.name){
        res.status(400).json({message:'Name is required'});
      }
    
      const Supplier = await SupplierServiceService.updateSupplier(req.body.name,req.body.adress);
      if (!Supplier){
        return res.status(404).json({errors:['Supplier not found']});
      }
      res.json(Supplier);
}

const deleteSupplier = async (req,res) => {
    const Supplier = await SupplierService.deleteSupplier(req.params.name);
    if (!Supplier){
      return res.status(404).json({errors:['Supplier not found']});
    }
    res.send();
  }

module.exports = {
    createSupplier,
    getSupplierByName,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}