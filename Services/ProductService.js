const Product = require('../Models/Product');


const createProduct = async (name,category,EggSize,traysize,price,description,image) => {
const productExist=await Product.findOne({name:name})
  if(productExist)
    return false
    const product = new Product(
        {
       name:name,
       category:category,
       EggSize:EggSize,
       traysize:traysize,
       price:price,
       description:description,
       image:image
        });
    
    return await product.save()
}


const getProduct = async(existingName) =>{
  return await Product.findOne({name:existingName})
}

const getProductById = async(productId) =>{
    return await Product.findById(productId)
}

const getProducts = async() =>{
    return await Product.find({})
}

const updateProduct = async (existingName,newName,category,eggSize,traySize,price,description,image) => {
  const product = await getProduct(existingName);
    
  if (!product) {
    return null;
  }
    product.name=newName  
    product.category=category
    product.EggSize=eggSize
    product.traysize=traySize
    product.price=price
    product.description=description
    product.image=image
    await product.save();
    return product;
}

const deleteProduct = async (name) => {
    const product = await getProduct(name);
    if (!product)
        return null;
    await product.deleteOne();
    return product;
}

const search = async (query) => {
    try {
        console.log(query)
      const products = await Product.find({ name: { $regex: query, $options: 'i' } }).exec();
      return products;
    } catch (err) {
      console.log('Error occurred during product search:', err);
      return -1;
    }
  };
  
const filter=async(category,eggSize,traySize)=>{

    
    const query = {};
  
    if (category) {
      query.category = { $in: category };
    }
  
    if (eggSize) {
      query.EggSize = { $in: eggSize };
    }
  
    if (traySize) {
      query.traysize = { $in: traySize };
    }
  
    return Product.find(query);
}
module.exports = {
    createProduct,
    getProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
    search,
    filter
}
