import React, { useContext } from 'react'
import Interiormatch from './Interiormatch'
import { sectionStore } from '../App'

const Interiorstyle = () => {

    const {interiorList} = useContext(sectionStore)
  return (
    <div>
        <h1 className='text-center m-2 text-light' style={{textDecoration: "underline"}}>Design behind boundaries</h1>
        <div className="album py-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
        {interiorList.map((interior, ind) => <div key={ind} className="col">
          <div className="card shadow border-0">
              <Interiormatch interior={interior}/>
          </div>
        </div>)}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Interiorstyle