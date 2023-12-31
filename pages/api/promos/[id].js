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
                const riwayat = await Riwayat.findById(id);

                if (!riwayat) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: riwayat });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const riwayat = await Riwayat.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!riwayat) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: riwayat });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedRiwayat = await Riwayat.deleteOne({ _id: id });

                if (!deletedRiwayat.deletedCount) {
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
