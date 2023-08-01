import dbConnect from "../../../lib/dbConnect";
import Makanan from "../../../models/Makanan";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const makanan = await Makanan.findById(id);

                if (!makanan) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: makanan });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const makanan = await Makanan.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!makanan) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: makanan });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedMinuman = await Makanan.deleteOne({ _id: id });

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
