const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema(
{

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},


products:[

{

product:{
type:mongoose.Schema.Types.ObjectId,
ref:"Product",
required:true
},


name:{
type:String,
required:true
},


quantity:{
type:Number,
required:true
},


price:{
type:Number,
required:true
},


image:{
type:String
}

}

],



shippingAddress:{


name:{
type:String,
required:true
},


phone:{
type:String,
required:true
},


address:{
type:String,
required:true
}


},



totalAmount:{


type:Number,

required:true

},



orderStatus:{


type:String,

default:"Pending"

}


},

{
timestamps:true
}

);



module.exports = mongoose.model(
"Order",
orderSchema
);