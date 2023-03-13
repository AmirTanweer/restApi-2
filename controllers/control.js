
// creating functions to pass to routes.js and other files if necessary

const Product= require("../models/models")
const getAllProducts=  async (req,res)=>{
     const {company}=req.query;
     const queryObject={};
     if(company){
        queryObject.company=company;
           console.log(queryObject.company)
     }
        const myData=await Product.find(queryObject);      // using mongoose inbuilt functions to receive data from 
                                                         // atlas database
        
        res.status(200).json({myData});    //  this will return json file in dom
        
};
const getAllProductsTesting=  async (req,res)=>{
        const myData=await Product.find(req.query);   //find function help for searching
         console.log("req.query -> ",req.query);
         
        res.status(200).json({myData})  
};

module.exports={getAllProducts,getAllProductsTesting}    //exporting both functions