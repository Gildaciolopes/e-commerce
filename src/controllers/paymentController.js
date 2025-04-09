const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPixPayment = async (req, res, next) => {
  try {
    const { amount, currency = "brl", orderId } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["pix"],
      metadata: { orderId },
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
      pixQrCode: paymentIntent.next_action.pix_display_qr_code,
      pixExpiresAt: paymentIntent.next_action.expires_at,
    });
  } catch (err) {
    next(err);
  }
};
