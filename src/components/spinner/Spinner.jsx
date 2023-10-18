import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


const Spinner = () => {
  return (
    <div className='container-fluid fixed h-screen'>
    <Spinner animation="border" variant="danger" role="status" size="sm">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Spinner
