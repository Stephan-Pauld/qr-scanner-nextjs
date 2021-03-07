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

        console.log(user.events);

        return res.status(200).json({ success: true, data: user });
      } catch (error) {

        return res.status(400).json({ success: false });
      }
      break;
  }
}