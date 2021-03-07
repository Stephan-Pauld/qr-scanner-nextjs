import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case 'GET':
      try {
        const user = await User.find({});

        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      console.log(body);
      try {
        const user = await User.findById(body.userId)

        if (!user) {
          res.status(400).json({ success: false });
        }
        await user.events.push({ name: body.name, description: body.description, atendees: body.atendees })
        user.save();

        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}