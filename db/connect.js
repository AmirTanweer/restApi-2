//Creating database 

const mongoose=require('mongoose')

const uri="mongodb+srv://admin:admin123@cluster1.sjwiw8r.mongodb.net/admin?retryWrites=true&w=majority" //url from 
                                                                //mongodb Atlas to connect with nodejs 


const connectDB=()=>{                     
    console.log("connect db")
    return mongoose.connect(uri,{       
        useNewUrlParser: true,         //it is important to use
        useUnifiedTopology: true,       // it is important to use
    })
}
module.exports=connectDB;