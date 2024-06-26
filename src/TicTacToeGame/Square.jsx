import React from 'react'

function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    style={{border:"1px solid",
         height:'80px',
          width:'35%', 
          display:'flex',
          justifyContent:'center',
        alignItems:'center'}}
     className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square