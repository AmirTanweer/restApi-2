
// creating functions to pass to routes.js and other files if necessary

const Product= require("../models/models")
const getAllProducts=  async (req,res)=>{
     
        const myData=await Product.find();      // using mongoose inbuilt functions to receive data from atlas 
                                               // database
        
        res.status(200).json({myData});    //  this will return json file in dom
        // res.status(200).send("hello")                  // this will return string in dom
};
const getAllProductsTesting=  async (req,res)=>{
        const myData=await Product.find({name:"iphone"});   //find function help for searching
        res.status(200).json({myData})  
};

module.exports={getAllProducts,getAllProductsTesting}    //exporting both functions