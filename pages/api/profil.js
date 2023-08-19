// import dbConnect from "../../../lib/dbConnect";
// import User from "../../models/schema";

// dbConnect();

// export default async (req, res) => {
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const users = await User.find({}); 
//         res.status(200).json({ success: true, data: users });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "POST":
//       try {
//         const data = req.body;
//         const user = await User.create(data);
//         res.status(201).json({ success: true, data: user });
//       } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//       }
//       break;
//     case "DELETE":
//       try {
//         const { id } = req.query;
//         await User.findByIdAndDelete(id);
//         res.status(200).json({ success: true, data: {} });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break; 
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };
