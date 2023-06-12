const ProductService = require('../Services/ProductService')

const createProduct = async (req,res) => {
  const newProduct = await ProductService.createProduct(req.params.productid,req.params.name,req.params.category,req.params.size,req.params.traysize,req.params.price,req.params.description,req.params.supplier);
  res.json(newProduct)
}


const getProducts = async (req,res) => {
  const product = await ProductService.getProducts();
  res.json(product);
}

const getProductByID = async (req,res) => {
  const product = await ProductService.getProductByID(req.params.productid);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
}

const updateProduct = async (req,res) => {
  /*if (!req.body.title){
    res.status(400).json({message:'title is required'});
  }*/

  const product = await ProductService.updateProduct(req.params.productid,req.params.name,req.params.category,req.params.size,req.params.traysize,req.params.price,req.params.description,req.params.supplier);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
};


const deleteProduct = async (req,res) => {
  const product = await ProductService.deleteProduct(req.params.productid);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.send();
}

module.exports = {
    createProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct

}