const User = require("../models/User");

exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(
      req.user.id
    );

    if (
      !user.wishlist.includes(productId)
    ) {
      user.wishlist.push(productId);
    }

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.removeFromWishlist =
  async (req, res) => {
    try {
      const { productId } = req.params;

      const user = await User.findById(
        req.user.id
      );

      user.wishlist =
        user.wishlist.filter(
          (id) =>
            id.toString() !== productId
        );

      await user.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

exports.getWishlist = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.user.id
    ).populate("wishlist");

    res.status(200).json(
      user.wishlist
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};