import axios from 'axios';
import QRCode from 'qrcode.react';

export const getStaticPaths = async () => {
  const res = await axios('http://localhost:3000/api/notes/')

  const paths = res.data.data.map(event => {
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
  const id = context.params.id;
  const res = await axios.get(`http://localhost:3000/api/notes/${id}`)

  return {
    props: { event: res.data.data }
  }
}

const eventDetails = ({ event }) => {
  console.log(event);
  return (
    <>
      <h1>{event.event_title}</h1>
      < QRCode
        value={"https://i.pinimg.com/originals/51/7c/e2/517ce2fd6abacf809af5ea193a38ca91.jpg"}
        size={444}
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
    </>
  )
}

export default eventDetails


