const Product = require('../Models/Product');
const ProductService = require('../Services/ProductService');


const createProduct = async (req,res) => {
  const {
    name,category,EggSize,traysize,price,description,image
  } = req.body;
const newProduct = await ProductService.createProduct( name,category,EggSize,traysize,price,description,image)
  if(newProduct)
    return res.redirect('/admin')
    else return  res.redirect('/admin/createProduct?error=1')
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


const updateProduct = async (req, res) => {
  const { existingName, newName, category, eggSize, traySize, price, description, image } = req.body;

  const product = await ProductService.updateProduct(existingName, newName, category, eggSize, traySize, price, description, image);

  if (!product) {
    return res.redirect('/admin/updateProduct?error=1');
  }

  return res.redirect('/admin');
};



const deleteProduct = async (req,res) => {
  const product = await ProductService.deleteProduct(req.body.name);
  if(product)
    return res.redirect('/admin')
    else return res.redirect('/admin/deleteProduct?error=1');
    
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
async function postToFacebook(postMessage,imageLink) {
  const API_BASE = 'https://graph.facebook.com/v15.0';
const userToken = "EAANq3jedXiEBALI4c6Yl9myxy7x3ujOSBT4mHTFrvMd4XYtY3pD0YZBFRCnICtsaQUJIpPhAPVJSjO4IK8VYZA30V9V0WXwAcZBmN2YPCOQtgUOBqeejeLtTk05IW3JoW2ZAVa056g83rzifHSUc1QaN263ShJD2t8NQjRNo1zudqIfGBKxG82ZCsh6edgdyVWxA7xV4WCyISGfK7fy9w"

const pageResp = await fetch(`${API_BASE}/me/accounts?access_token=${userToken}`);

const pages = await pageResp.json();

const page = pages.data[0]
const pageToken = page.access_token;
const pageId = page.id;

const fbPostObj = {
      message: postMessage,
      
};

const postResp = await fetch(`${API_BASE}/${pageId}/feed?access_token=${pageToken}`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(fbPostObj)
});

const post = await postResp.json();


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
