import React from 'react'

const Letssee = () => {
  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <h1>With a keen eye for detail and a commitment</h1>
        </header>
        <div className="row align-items-md-stretch">
          <div className="col-md-12 mt-3">
            <div className="h-100 text-bg-light rounded-3">
              <Drawerjumbo />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="h-100 text-bg-light rounded-3">
              <Drawerjumbo />
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="h-100 bg-body-light border rounded-3">
              <Drawerjumbo />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Letssee