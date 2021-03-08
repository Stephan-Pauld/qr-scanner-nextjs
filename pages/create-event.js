import React, { useState } from 'react';
import axios from 'axios';
import { Button,TextField } from '@material-ui/core/';

const createEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const createEvent = (e) => {

    e.preventDefault();
    const eventObject = {
      userId: '604461283dca7f17814267a2',
      name,
      description,
      atendees: []
    }
    axios.put('http://localhost:3000/api/users', eventObject)
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
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic" 
        label="Event Name" 
        variant="outlined" />
        <br />
        <TextField 
        onChange={(e) => setDescription(e.target.value)}
        id="outlined-basic" 
        label="Event Description" 
        variant="outlined" />
        <br/>
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



