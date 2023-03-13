//Creating database 

const mongoose=require('mongoose')




const connectDB=(uri)=>{                 // now the uri is coming from app.js    
    console.log("connect db")
    return mongoose.connect(uri,{       
        useNewUrlParser: true,         //it is important to use 
        useUnifiedTopology: true,       // it is important to use 
    })
}
module.exports=connectDB;