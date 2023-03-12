const express =require("express");   // 
const router =express.Router();
const {getAllProducts,getAllProductsTesting}=require('../controllers/control');   //importing getAllProducts,
                                                                                   //getAllProductsTesting from 
                                                                                 //  contron.js
router.route("/").get(getAllProducts);                                 // creating a route "/" 
router.route("/testing").get(getAllProductsTesting);                 // creating a route "/testing"

module.exports= router           // exporting router