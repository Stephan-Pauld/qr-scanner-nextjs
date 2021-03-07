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
        const user = await User.find({ "events._id": `${id}` })
        if (!user) {
          return res.status(400).json({ success: false });
        }

        const events = user[0].events;

        for (const event of events) {
          if (event._id.toString() === id) {
            return res.status(200).json({ success: true, data: event });
          }
        }

      } catch (error) {

        return res.status(400).json({ success: false });
      }
      break;
    case 'PUT':

      try {
        const user = await User.find({ "events._id": `${id}` })

        if (!user) {
          return res.status(400).json({ success: false });
        }

        //specific user
        const query = {_id: user[0]._id}

        // saying we want to add body.email to events.atendees
        const updateDocument = {
          $push: { "events.$[email].atendees": body.email }
        };

        // we only want to add it to the specific event ID
        const options = {
          arrayFilters: [
            {
              "email._id": id,
            },
          ],
        };
        const result = await User.updateOne(query, updateDocument, options);
        res.status(201).json({ success: true });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false });
      }
      break;
  }
}