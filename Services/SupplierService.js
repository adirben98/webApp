const Supplier = require('../Models/Supplier');

const createSupplier = async (name,address) => {
    const supplier = new Supplier(
        {
        name:name,
        address:address
        });
    
    
    return await supplier.save()
}

const getSupplierByName = async(name) =>{
    return await Supplier.findByname(name)
}

const getSuppliers = async() =>{
    return await Supplier.find({})
}

const updateSupplier = async (name,address) => {
    const supplier = await getSupplierByName(name);
    if (!supplier)
        return null;
    supplier.name = name;
    supplier.address=address
    await supplier.save();
    return supplier;
}

const deleteSupplier = async (name) => {
    const supplier = await getSupplierByName(name);
    if (!supplier)
        return null;
    await supplier.deleteOne();
    return supplier;
}

module.exports = {
    createSupplier,
    getSupplierByName,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}