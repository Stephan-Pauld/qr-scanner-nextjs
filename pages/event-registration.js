import React, { useEffect } from 'react'

const eventRegistration = () => {


const style = {
  center : {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

  return (
    <div style={style.center}>
      <h1>Event Registration</h1>
      <form action="">
        <input type="text" placeholder='email adress'/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default eventRegistration


