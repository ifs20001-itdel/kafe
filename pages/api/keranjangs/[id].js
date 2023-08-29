import dbConnect from "../../../lib/dbConnect";
import Keranjang from "../../../models/Keranjang";

dbConnect();

export default async (req, res) => {
  const { method, query } = req;

  switch (method) {
    case "DELETE":
      try {
        const { id } = query;
        if (!id) {
          return res.status(400).json({ success: false, error: "Missing ID parameter" });
        }

        const deletedKeranjang = await Keranjang.findByIdAndDelete(id);
        if (!deletedKeranjang) {
          return res.status(404).json({ success: false, error: "Keranjang not found" });
        }

        return res.status(200).json({ success: true, data: deletedKeranjang });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
