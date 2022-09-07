import React from 'react'

const Cardsh = ({img , name, info}) => {
  return (
    <div className='cardsh'>
        <div className="carbloc">
                <div className="card1">
                    <img src={img} />
                    <h3>{name}</h3>
                    <p>{info} </p>
                </div>            
            </div>
    </div>
  )
}

export default Cardsh