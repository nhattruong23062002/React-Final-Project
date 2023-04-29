import React from 'react'

const Attribute = ({label,activeColor}:{label:string,activeColor?:string}) => {
  return (
    <div className='wrapper__choose'>
      <span className= {`choose ${activeColor}`}>{label}</span>
    </div>
  )
}

export default Attribute