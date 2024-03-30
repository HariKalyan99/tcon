import React from 'react'

const Designprocess = ({abt}) => {
  return (
    <>
    <hr className="featurette-divider" />

<div className="row featurette m-5">
  <div className="col-md-7 d-flex justify-content-center align-items-center">
    <div>



      <p className="lead text-center" >
        {abt.about[0].content}
      </p>
    </div>
  </div>
  <div className="col-md-5 d-flex justify-content-center">
    <div style={{ height: "300px", width: "300px", overflow: "hidden"}}>
      <img
        src={abt.about[0].image}
        alt="cp"
        style={{ height: "300px", objectFit: "cover"}}
      />
    </div>
  </div>
</div>


<div className="row featurette m-5">
  <div className="col-md-7 order-md-2 d-flex justify-content-center align-items-center">
    <div>
      <p className="lead text-center">
        {abt.about[1].content}
      </p>
    </div>
  </div>
  <div className="col-md-5 order-md-1  d-flex justify-content-center ">
    <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
      <img
        src={abt.about[1].image}
        alt="cp"
        style={{ height: "300px", objectFit: "cover"}}
      />
    </div>
  </div>
</div>


<div className="row featurette m-5">
  <div className="col-md-7 d-flex justify-content-center align-items-center">
    <div>

      <p className="lead text-center">
       {abt.about[2].content}
      </p>
    </div>
  </div>
  <div className="col-md-5  d-flex justify-content-center">
    <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
      <img
        src={abt.about[2].image}
        alt="cp"
        style={{ height: "300px", objectFit: "cover"}}
      />
    </div>
  </div>
</div>
    </>
  )
}

export default Designprocess