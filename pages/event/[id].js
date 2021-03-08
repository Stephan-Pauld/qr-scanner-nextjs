import axios from 'axios';
import QRCode from 'qrcode.react';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core/';



export const getStaticPaths = async () => {
  const res = await axios(`http://localhost:3000/api/users/604461283dca7f17814267a2`)

  const paths = res.data.data.events.map(event => {
    return {
      params: { id: event._id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {

  const getServerSideProps = async ({ req, res }) => {
    
    return { props: { token: req.cookies.token } }
  }
  const id = context.params.id;
  const res = await axios('http://localhost:3000/api/users/604461283dca7f17814267a2')
  console.log(getServerSideProps());
  for (const event of res.data.data.events) {
    if (event._id === id) {
      return {
        props: { event: event }
      }
    }
  }

}


const style = {
  page_layout: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const eventDetails = ({ event }) => {
  const [owner, setOwner] = useState(true)
  const [email, setEmail] = useState('')

  const submitEmail = (e) => {
    e.preventDefault();

    const payload = {
      email: email
    }
    axios.put(`http://localhost:3000/api/events/${event._id}`, payload)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      })
  }


  if (owner) {
    return (
      <>
        <div style={style.page_layout}>
          <div>
            <h1>{event.name}</h1>
            <h4>{event.description}</h4>
            < QRCode
              value={`http://localhost:3000/event/${event._id}`}
              size={333}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"M"}
              includeMargin={false}
              renderAs={"canvas"}
              imageSettings={{
                src: "",
                x: 0,
                y: 0,
                height: 27,
                width: 27,
                excavate: true,
              }}
            />
          </div>
          <div>
            <ul>
              {event.atendees.map(atendee => {
                return <li>{atendee}</li>
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <h1>{event.name} Registration</h1>
      <div>
        <p>Please Enter Your Email For Registration</p>
        <form action="">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined" />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => submitEmail(e)}
          > Register</Button>

        </form>
      </div>
    </>
  )

}

export default eventDetails


