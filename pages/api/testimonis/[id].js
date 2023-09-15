import dbConnect from "../../../lib/dbConnect";
import Testimoni from "../../../models/Testimoni";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const testimoni = await Testimoni.findById(id);

                if (!testimoni) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: testimoni });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const testimoni = await Testimoni.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!testimoni) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: testimoni });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedMinuman = await Testimoni.deleteOne({ _id: id });

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
