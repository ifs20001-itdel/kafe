import dbConnect from "@/utils/dbConnect";
import Promo from "@/models/Promo";

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
        const data = req.body; // Tidak perlu menguraikan data, langsung gunakan req.body sebagai objek
        const promo = await Promo.create(data);
        res.status(201).json({ success: true, data: promo });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
