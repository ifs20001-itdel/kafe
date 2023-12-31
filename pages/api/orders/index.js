import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { orders, lokasi } = req.body; // Ambil data pesanan (orders) dan lokasi dari req.body

        // Calculate total price based on the orders
        const totalPrice = orders.reduce((total, item) => total + item.price, 0);

        // Create a new order document in the database
        const order = await Order.create({ items: orders, total: totalPrice, lokasi: lokasi });

        res.status(201).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "GET":
      try {
        // Retrieve all orders from the database
        const orders = await Order.find({});

        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
