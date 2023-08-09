import dbConnect from "../../../lib/dbConnect";
import Promo from "../../../models/Promo";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const promos = await Promo.find({});
        res.status(200).json({ success: true, data: promos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const promo = await Promo.create(data);
        res.status(201).json({ success: true, data: promo });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ success: false, error: "Missing ID parameter" });
        }

        const deletedPromo = await Promo.findByIdAndDelete(id);
        if (!deletedPromo) {
          return res.status(404).json({ success: false, error: "Promo not found" });
        }

        return res.status(200).json({ success: true, data: deletedPromo });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
