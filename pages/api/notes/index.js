import dbConnect from "@/utils/dbConnect";
import Note from "@/models/Note";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = JSON.parse(req.body); // Mengurai data dari string menjadi objek
        const note = await Note.create(data);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
