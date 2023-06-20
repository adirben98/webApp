const ProductService = require('../Services/ProductService');

const createProduct = async (req,res) => {
  const newProduct = await ProductService.createProduct(req.body.productid,req.body.name,req.body.category,req.body.size,req.body.traysize,req.body.price,req.body.description,req.body.supplier);
  res.json(newProduct)
}


const getProducts = async (req,res) => {
  const product = await ProductService.getProducts();
  res.json(product);
}

const getProductByID = async (req,res) => {
  const product = await ProductService.getProductByID(req.body.productid);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
}

const updateProduct = async (req,res) => {
  if (!req.body.title){
    res.status(400).json({message:'title is required'});
  }

  const product = await ProductService.updateProduct(req.body.productid,req.body.name,req.body.category,req.body.size,req.body.traysize,req.body.price,req.body.description,req.body.supplier);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
};


const deleteProduct = async (req,res) => {
  const product = await ProductService.deleteProduct(req.params.id);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.send();
}
const search=async(req,res)=>{
  const searchResult= await ProductService.search(req.body.query)
  if(searchResult===-1)
  {
    res.status(500).json({ error: 'Internal server error' });
  }
  else{
    res.json({ products: searchResult });
  }
}

module.exports = {
    createProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct,
    search

}