import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link'
import styles from '../../styles/Events.module.css'

const index = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/users/604461283dca7f17814267a2')
      .then(res => {
        setEvents(res.data.data.events)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])



  return (
    <>
      {events.map(event => (
        <Link href={`/event/${event._id}`} key={event._id}>
          <a className={styles.single}>
          <h3>{event.name}</h3>
          <h3>{event.description}</h3>
          </a>
        </Link>
      ))}
    </>
  )
}

export default index
