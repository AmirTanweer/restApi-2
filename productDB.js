require("dotenv").config()
const connectDB=require('./db/connect');
const Product=require("./models/models");

const ProductJson=require("./products.json");
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);    //starting database
        await Product.create(ProductJson);        // pushing json file into schema 
        console.log("success");
    }
    catch(error){
        console.log(error);
    }
};

start();