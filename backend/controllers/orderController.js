const Order = require("../models/Order");
const Cart = require("../models/Cart");

// CREATE ORDER

exports.createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const products = cart.items.map((item) => ({
      product: item.product._id,

      name: item.product.name,

      quantity: item.quantity,

      price: item.product.price,

      image: item.product.images[0],
    }));

    const totalAmount = products.reduce(
      (acc, item) => acc + item.price * item.quantity,

      0,
    );

    const order = await Order.create({
      user: req.user.id,

      products,

      totalAmount,

      shippingAddress: req.body.shippingAddress,
    });

    // clear cart after order

    cart.items = [];

    await cart.save();

    res.status(201).json(order);
  } catch(error){

console.log("ORDER ERROR:", error);

res.status(500).json({
    message:error.message,
    stack:error.stack
});

}
};

// GET LOGGED USER ORDERS

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);
  } catch(error){

console.log("ORDER ERROR:", error);

res.status(500).json({
    message:error.message,
    stack:error.stack
});

}
};

// ADMIN GET ALL ORDERS

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()

      .populate("user", "name email")

      .sort({
        createdAt: -1,
      });

    res.status(200).json(orders);
  } catch(error){

console.log("ORDER ERROR:", error);

res.status(500).json({
    message:error.message,
    stack:error.stack
});

}
};

// UPDATE ORDER STATUS

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    order.orderStatus = req.body.status;

    await order.save();

    res.status(200).json(order);
  } catch(error){

console.log("ORDER ERROR:", error);

res.status(500).json({
    message:error.message,
    stack:error.stack
});

}
};
