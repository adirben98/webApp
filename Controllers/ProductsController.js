const ProductService = require('../Services/ProductService');


const createProduct = async (req,res) => {
  const {
    name,category,EggSize,traysize,price,description,image
  } = req.body;
  const newProduct = await ProductService.createProduct( name,category,EggSize,traysize,price,description,image)
res.status(200).json(newProduct)
}

const getProducts = async (req,res) => {
  const product = await ProductService.getProducts();
  res.json(product);
}

const getProduct = async (req,res) => {
  const product = await ProductService.getProduct(req.params.productName);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
}

const getProductById=async (req,res) => {
  const product = await ProductService.getProductById(req.body.productId);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
}


const updateProduct = async (req,res) => {

  const product = await ProductService.updateProduct(req.body.productid,req.body.name,req.body.category,req.body.size,req.body.traysize,req.body.price,req.body.description,req.body.supplier);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  res.json(product);
};


const deleteProduct = async (req,res) => {
  const product = await ProductService.deleteProduct(req.body.name);
  if (!product){
    return res.status(404).json({errors:['Product not found']});
  }
  
}
const search=async(req,res)=>{
  const searchResult= await ProductService.search(req.query.query)
  if(searchResult===-1)
  {
    res.status(500).json({ error: 'Internal server error' });
  }
  else{
    res.json({ products: searchResult});
}
}
const filter=async(req,res)=>{
  const {category,eggSize,traySize}=req.body

  ProductService.filter(category,eggSize,traySize)
    .then(products => {
      res.json({products:products});
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving products' });
    });

}
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    search,
    filter,
}
