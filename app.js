// Creating a express server



const express=require('express');   // importing express
const app=express();                   // assigning app ans express server
const PORT=process.env.PORT || 5000         


const routes=require('./routes/routes')         //importing routes from routes.js
// app.get("/", (req,res)=>{                     // creating "/" routes 
//    res.send("Hi I am amir , I am live");
// })


//middleware or to set router
app.use("/myapi",routes);         // setting middle routes like /myapi  and calling "routes" 





const start= async ()=>{              // start function asynchronous
    try{
        app.listen(PORT,()=>{            // listening is important as it initiate express server
          console.log(  `Successfully connected in Port ${PORT} `);
        })

    }
    catch(error){             // if some error occur it return error
        console.log(error);
    }
}; 
start();   // calling start function



