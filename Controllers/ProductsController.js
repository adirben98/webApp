const ProductService = require('../Services/ProductService');
const axios=require('axios')

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

const facebook = async (req, res) => {
  try {
    const accessToken = 'EAASQcjtNN2IBAGl81pHGZBCVRWtF5tlQqNYAMAZBhl7xxasi6sktQoKCZAYlUIGwN1PV2ZBIq5P5iCzeZCihaXOZAafhtZBp4o5qudibZB271qRKvKGVQqJ5evHY15Uaa9msoCPZAjPpkSJ5k1uEGFKj5ijswtRYZCg8SQqK32fJThpiEuRbVIisKnm9kWTlNxl6edCNlspAsiWmGq52fDTxlo'; // Access token obtained from Facebook Login
    const message = req.body.name; // The message for the post
    const imageUrl = req.body.image; // URL of an image to include in the post

    // Make a POST request to the Facebook API
    const response = await axios.post(
      `https://graph.facebook.com/me/feed`,
      {
        message,
        attached_media: [
          {
            media_type: 'IMAGE',
            media_url: imageUrl,
          },
        ],
      },
      {
        params: {
          access_token: accessToken,
        },
      }
    );

    // Handle the response from the Facebook API
    console.log('Post created on Facebook:', response.data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error creating post on Facebook:', error.response.data);
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    search,
    filter,
    facebook

}
