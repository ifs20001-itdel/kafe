import dbConnect from "../../../lib/dbConnect";
import Riwayat from "../../../models/Riwayat";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const Riwayat = await Riwayat.findById(id);

                if (!Riwayat) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: Riwayat });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const Riwayat = await Riwayat.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!Riwayat) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: Riwayat });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedMinuman = await Riwayat.deleteOne({ _id: id });

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
