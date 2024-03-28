import React, { useEffect, useRef } from 'react'
import video from '../assets/vid8.mp4'

const Dashboard = () => {

  const videoRef = useRef("");
  useEffect(() => {
    videoRef.current.play();
  }, [])
  return (
    <main style={{height: "75vh"}}>
  <div className="position-relative overflow-hidden text-center bg-body-light h-100">
    <video autoPlay muted loop ref={videoRef} id='myVideo'><source src={video} type="video/mp4" /></video>
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold mt-5 pt-5">Building Dreams, One Brick at a Time</h1>
      <h3 className="fw-normal text-muted mb-3 ">Crafting Homes, Creating Memories</h3>
    </div>
  </div>
</main>
  )
}

export default Dashboard