
// creating functions to pass to routes.js and other files if necessary

const getAllProducts=  async (req,res)=>{
        res.status(200).json({msg:"I am getAllProducts"});    //  this will return json file in dom
        // res.status(200).send("hello")                  // this will return string in dom
};
const getAllProductsTesting=  async (req,res)=>{
        res.status(200).json({msg:"I am getAllProductsTesting"})  
};

module.exports={getAllProducts,getAllProductsTesting}    //exporting both functions