const Order = require("../models/Order");

exports.createOrder = async (req, res, next) => {
  try {
    const { orderItems, totalPrice } = req.body;
    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalPrice,
    });
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "orderItems.product"
    );
    res.json(orders);
  } catch (err) {
    next(err);
  }
};
