import dbConnect from "../../../lib/dbConnect";
import Makanan from "../../../models/Makanan";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const makanans = await Makanan.find({});
        res.status(200).json({ success: true, data: makanans });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = req.body;
        const makanan = await Makanan.create(data);
        res.status(201).json({ success: true, data: makanan });
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

        const deletedMakanan = await Makanan.findByIdAndDelete(id);
        if (!deletedMakanan) {
          return res.status(404).json({ success: false, error: "Makanan not found" });
        }

        return res.status(200).json({ success: true, data: deletedMakanan });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
