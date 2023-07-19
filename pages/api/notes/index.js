import dbConnect from "@/utils/dbConnect";
import Note from "@/models/Note";
import multer from "multer";

dbConnect();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Menentukan direktori penyimpanan untuk file gambar
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        upload.single("image")(req, res, async (err) => {
          if (err instanceof multer.MulterError) {
            return res.status(400).json({ success: false, error: err.message });
          } else if (err) {
            return res.status(400).json({ success: false, error: err });
          }

          const { title, description } = req.body;
          const image = req.file ? `/uploads/${req.file.filename}` : null; // Menyimpan path gambar ke dalam variabel `image`

          const data = { title, description, image };
          const note = await Note.create(data);
          res.status(201).json({ success: true, data: note });
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
