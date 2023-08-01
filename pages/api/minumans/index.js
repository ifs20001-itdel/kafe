import dbConnect from "../../../lib/dbConnect";
import Minuman from "../../../models/Minuman";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const minumans = await Minuman.find({});
        res.status(200).json({ success: true, data: minumans });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const minuman = await Minuman.create(data);
        res.status(201).json({ success: true, data: minuman });
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

        const deletedMinuman = await Minuman.findByIdAndDelete(id);
        if (!deletedMinuman) {
          return res.status(404).json({ success: false, error: "Minuman not found" });
        }

        return res.status(200).json({ success: true, data: deletedMinuman });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
