const Product = require('../Models/Product');


const createProduct = async (name,category,price,description,supplier) => {
    const Product = new Product(
        {
       name:name,
       category:category,
       price:price,
       description:description,
       supplier:supplier
        });
    
    return await Product.save()
}

const getProductByName = async(name) =>{
    return await Product.findByName(name)
}

const getProducts = async() =>{
    return await Product.find({})
}

const updateProduct = async (name,category,price,description,supplier) => {
    const Product = await getProductByName(name);
    if (!Product)
        return null;
    Product.category=category
    Product.price=price
    Product.description=description
    Product.supplier=supplier
    await Product.save();
    return Product;
}

const deleteProduct = async (name) => {
    const Product = await getProductByName(name);
    if (!Product)
        return null;
    await Product.deleteOne();
    return Product;
}

module.exports = {
    createProduct,
    getProductByName,
    getProducts,
    updateProduct,
    deleteProduct
}