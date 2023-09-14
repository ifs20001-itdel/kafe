import dbConnect from "../../../lib/dbConnect";
import Riwayat from "../../../models/Riwayat";
import Order from "../../../models/Order";


dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const riwayats = await Riwayat.find({});
        res.status(200).json({ success: true, data: riwayats });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const riwayat = await Riwayat.create(data);
        res.status(201).json({ success: true, data: riwayat });
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

        const deletedRiwayat = await Riwayat.findByIdAndDelete(id);
        if (!deletedRiwayat) {
          return res.status(404).json({ success: false, error: "Riwayat not found" });
        }

        return res.status(200).json({ success: true, data: deletedRiwayat });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
