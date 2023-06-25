const Product = require('../Models/Product');


const createProduct = async (name,category,EggSize,traysize,price,description,image) => {
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

const getProduct = async(productName) =>{
    const decodedName = decodeURIComponent(productName)
    return await Product.findOne({name:decodedName})
}

const getProductById = async(productId) =>{
    return await Product.findById(productId)
}

const getProducts = async() =>{
    return await Product.find({})
}

const updateProduct = async (name,category,size,traysize,price,description,supplier) => {
    const product = await Product.findOne(name);
    if (!product)
        return null;
    product.name=name    
    product.category=category
    product.size=size
    product.traysize=traysize
    product.price=price
    product.description=description
    product.supplier=supplier
    await product.save();
    return product;
}

const deleteProduct = async (productid) => {
    const product = await getProductByID(productid);
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
  

module.exports = {
    createProduct,
    getProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
    search
}