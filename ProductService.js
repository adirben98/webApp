const Product = require('../Models/Product');


const createProduct = async (name,category,price,description,supplier) => {
    const product = new Product(
        {
       name:name,
       category:category,
       price:price,
       description:description,
       supplier:supplier
        });
    
    return await product.save()
}

const getProductByName = async(name) =>{
    return await Product.findOne(name)
}

const getProducts = async() =>{
    return await Product.find({})
}

const updateProduct = async (name,category,price,description,supplier) => {
    const product = await getProductByName(name);
    if (!product)
        return null;
    product.category=category
    product.price=price
    product.description=description
    product.supplier=supplier
    await product.save();
    return product;
}

const deleteProduct = async (name) => {
    const product = await getProductByName(name);
    if (!product)
        return null;
    await product.deleteOne();
    return product;
}

module.exports = {
    createProduct,
    getProductByName,
    getProducts,
    updateProduct,
    deleteProduct
}