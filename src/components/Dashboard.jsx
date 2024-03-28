import React from 'react'
import video from '../assets/vid8.mp4'

const Dashboard = () => {
  return (
    <main className='h-25 h-md-75'>
  <div className="position-relative overflow-hidden text-center bg-body-light h-100">
    <video autoPlay muted loop id='myVideo'><source src={video} type="video/mp4" /></video>
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold mt-5 pt-5">Building Dreams, One Brick at a Time</h1>
      <h3 className="fw-normal text-muted mb-3 ">Crafting Homes, Creating Memories</h3>
    </div>
  </div>
</main>
  )
}

export default Dashboard