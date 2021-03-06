import React, { useState } from 'react';
import axios from 'axios';
import { Button,TextField } from '@material-ui/core/';

const createEvent = () => {
  const [event, setEvent] = useState('');


  const createEvent = (e) => {

    console.log(event);
    e.preventDefault();
    const eventObject = {
      event_title: event
    }
    axios.post('http://localhost:3000/api/notes', eventObject)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div>
      <form action="">
        {/* <input placeholder='My Training Seminar' onChange={(e) => setEvent(e.target.value)} type="text" /> */}
        <TextField 
        onChange={(e) => setEvent(e.target.value)}
        id="outlined-basic" 
        label="Event Name" 
        variant="outlined" />
        <br />
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => createEvent(e)}
        >
          Create Event
        </Button>
      </form>
    </div>
  )
}

export default createEvent




//   < QRCode
// value = { "https://i.pinimg.com/originals/51/7c/e2/517ce2fd6abacf809af5ea193a38ca91.jpg"}
// size = { 444}
// bgColor = { "#ffffff"}
// fgColor = { "#000000"}
// level = { "M"}
// includeMargin = { false}
// renderAs = { "svg"}
// imageSettings = {{
//   src: "",
//     x: 0,
//       y: 0,
//         height: 27,
//           width: 27,
//             excavate: true,
//         }}
// />