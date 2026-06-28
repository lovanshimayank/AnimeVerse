const Razorpay = require("razorpay");

console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
console.log("KEY SECRET:", process.env.RAZORPAY_KEY_SECRET);
const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET,

});



exports.createPayment = async (req,res)=>{

try{


console.log("PAYMENT REQUEST BODY:",req.body);


const {amount}=req.body;



if(!amount){

return res.status(400).json({

message:"Amount is required"

});

}



const options={


amount:Number(amount)*100,

currency:"INR",

receipt:`AnimeVerse_${Date.now()}`


};



console.log("RAZORPAY OPTIONS:",options);



const order = await razorpay.orders.create(options);



console.log("RAZORPAY ORDER CREATED:",order);



res.status(200).json({

success:true,

order

});


}

catch(error){

console.log("RAZORPAY ERROR FULL:", error);

console.log("ERROR RESPONSE:", error.response?.data);

res.status(500).json({

success:false,

message:error.message || "Razorpay Error",

error:error.response?.data || error

});


}


};