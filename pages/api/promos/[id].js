import dbConnect from "../../../lib/dbConnect";
import Promo from "../../../models/Promo";

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const promo = await Promo.findById(id);

                if (!promo) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: promo });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const promo = await Promo.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!promo) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: promo });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        case 'DELETE':
            try {
                const deletedPromo = await Promo.deleteOne({ _id: id });

                if (!deletedPromo.deletedCount) {
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
