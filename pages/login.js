import React from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core/';

const login = () => {


  const setCookies = () => {
    const token = {
      token: '604461283dca7f17814267a2'
    }
    axios.post(`http://localhost:3000/api/login`, token)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Email For Cookie"
        variant="outlined" />
      <br />
      <Button
        style={{ marginTop: "1%" }}
        variant="contained"
        color="primary"
        onClick={setCookies}
      >
        Set Cookie
        </Button>
    </>
  )
}

export default login
