const Cart = require("../models/Cart");


exports.addToCart = async (req,res)=>{
try{

const {productId,quantity}=req.body;


let cart=await Cart.findOne({
user:req.user.id
});


if(!cart){

cart=await Cart.create({
user:req.user.id,
items:[]
});

}


const existingItem=cart.items.find(
(item)=>
item.product.toString()===productId
);



if(existingItem){

existingItem.quantity += quantity || 1;

}
else{

cart.items.push({

product:productId,

quantity:quantity || 1

});

}


await cart.save();


res.status(200).json(cart);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





exports.getCart = async(req,res)=>{

try{

const cart=await Cart.findOne({
user:req.user.id
})
.populate("items.product");


res.status(200).json(cart);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





exports.removeFromCart = async(req,res)=>{

try{


const {productId}=req.params;


const cart=await Cart.findOne({
user:req.user.id
});


cart.items =
cart.items.filter(
(item)=>
item.product.toString()!==productId
);


await cart.save();


res.status(200).json(cart);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};





exports.updateQuantity = async(req,res)=>{

try{


const {productId}=req.params;

const {quantity}=req.body;


const cart=await Cart.findOne({
user:req.user.id
});


const item=cart.items.find(
(i)=>
i.product.toString()===productId
);



if(item){

item.quantity=quantity;

}


await cart.save();


res.status(200).json(cart);


}
catch(error){

res.status(500).json({
message:error.message
});

}

};