import React from 'react'
import imageSrc1 from '../assets/D1.png';
import imageSrc2 from '../assets/D2.png'
import imageSrc3 from '../assets/D3.png'

function CYBERSECURITY() {
  return (
    <div className="container mt-3">
    <div className="d-flex">
      <div className="col-4">
        <div className="border p-2">
          <img src={imageSrc1} className="card-img-top" alt="Image Description" />
        </div>
      </div>
      <div className="col-4">
        <div className="border p-2">
          <img src={imageSrc2} className="card-img-top" alt="Image Description" />
        </div>
      </div>
      <div className="col-4">
        <div className="border p-2">
          <img src={imageSrc3} className="card-img-top" alt="Image Description" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CYBERSECURITY