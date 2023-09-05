import dbConnect from "../../../lib/dbConnect";
import Keranjang from "../../../models/Keranjang";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const Keranjang = await Keranjang.findById(id);

                if (!Keranjang) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: Keranjang });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const Keranjang = await Keranjang.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!Keranjang) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: Keranjang });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedMinuman = await Keranjang.deleteOne({ _id: id });

                if (!deletedMinuman.deletedCount) {
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
