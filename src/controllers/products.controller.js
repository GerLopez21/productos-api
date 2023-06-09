import Product from "../models/Product";

export const createProduct =async(req,res) => {
    console.log("1")
    const {name,category,price,imgURL} = req.body
    console.log("2")
    const newProduct = new Product({name,category,price,imgURL})
    console.log("3")
    const productSaved = await newProduct.save()
    console.log("4")
    res.status(200).json(productSaved)
    console.log("64")

}
export const getProducts = async(req,res) => {
    const products = await Product.find()
    res.json(products)
}
export const getProductById = async(req,res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
}
export const updateProductById = async(req,res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,{new:true})
    res.status(200).json(updatedProduct)
}
export const deleteProductById = async(req,res) => {
    await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
}