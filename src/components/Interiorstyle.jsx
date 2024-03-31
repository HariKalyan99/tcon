import React, { useContext, useEffect } from 'react'
import Interiormatch from './Interiormatch'
import { sectionStore } from '../App'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Interiorstyle = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])

    const {interiorList} = useContext(sectionStore)
  return (
    <div>
        
        <div className="album py-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
        {interiorList.map((interior, ind) => <div key={ind} className="col" data-aos='fade-up'>
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