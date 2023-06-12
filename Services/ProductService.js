const Product = require('../Models/Product');


const createProduct = async (productid,name,category,size,traysize,price,description,supplier) => {
    const product = new Product(
        {
       productid:productid,     
       name:name,
       category:category,
       size:size,
       traysize:traysize,
       price:price,
       description:description,
       supplier:supplier
        });
    
    return await product.save()
}

const getProductByID = async(productid) =>{
    return await Product.findOne(productid)
}

const getProducts = async() =>{
    return await Product.find({})
}

const updateProduct = async (productid,name,category,size,traysize,price,description,supplier) => {
    const product = await getProductByID(productid);
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

module.exports = {
    createProduct,
    getProductByID,
    getProducts,
    updateProduct,
    deleteProduct
}