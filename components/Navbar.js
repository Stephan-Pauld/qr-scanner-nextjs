import React from 'react'
import Link from 'next/link'

const style = {
  header: {
    display: 'flex',
    // justifyContent: 'center'
    alignItems: 'center'
  }
}


const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>KOMLY</h1>
      </div>
      <div>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/create-event"><a>Create Event</a></Link>
        <Link href="/event"><a>My Events</a></Link>
      </div>
    </nav>
  )
}

export default Navbar
