import dbConnect from "../../../lib/dbConnect";
import Minuman from "../../../models/Minuman";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const minuman = await Minuman.findById(id);

                if (!minuman) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: minuman });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const minuman = await Minuman.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!minuman) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: minuman });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedMinuman = await Minuman.deleteOne({ _id: id });

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
