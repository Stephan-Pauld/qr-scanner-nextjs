import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

dbConnect();

export default async (req, res) => {

  const {
    query: { id },
    body,
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id)
        if (!user) {
          return res.status(400).json({ success: false });
        }

        return res.status(200).json({ success: true, data: user });

      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break
    case 'PUT':
      try {
        // const user = await User.findByIdAndUpdate(id, req.body, {
        //   new: true,
        //   runValidators: true,
        // });
        const user = await User.findById(id)
        if (!user) {
          return res.status(400).json({ success: false });
        }

        return res.status(200).json({ success: true, data: user });
      } catch (error) {

        return res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedUser = await User.deleteOne({ _id: id });

        if (!deletedUser) {
          return res.status(400).json({ success: false });
        }
        return res.status(200).json({ success: false, data: {} });

      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    default:
      return res.status(400).json({ success: false });
      break;

  }
}