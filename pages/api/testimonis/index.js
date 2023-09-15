import dbConnect from "../../../lib/dbConnect";
import Testimoni from "../../../models/Testimoni";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const testimonis = await Testimoni.find({});
        res.status(200).json({ success: true, data: testimonis });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const testimoni = await Testimoni.create(data);
        res.status(201).json({ success: true, data: testimoni });
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

        const deletedTestimoni = await Testimoni.findByIdAndDelete(id);
        if (!deletedTestimoni) {
          return res.status(404).json({ success: false, error: "Testimoni not found" });
        }

        return res.status(200).json({ success: true, data: deletedTestimoni });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
