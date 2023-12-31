import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const order = await Order.findById(id);

                if (!order) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: order });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const order = await Order.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!order) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: order });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedOrder = await Order.deleteOne({ _id: id });

                if (!deletedOrder.deletedCount) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
};
