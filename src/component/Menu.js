import React from 'react'

const Menu = (props) => {
  return (
    <div style={{width:"100%",display:"flex",flexDirection:"column",position:"sticky",top:"0"}}>
      <span style={{cursor:"pointer"}} onClick={()=> props.changeMenu(0)}>Home</span>
      <span style={{cursor:"pointer"}} onClick={()=> props.changeMenu(1)}>About</span>
      <span style={{cursor:"pointer"}} onClick={()=> props.changeMenu(2)}>Contact Us</span>
      <span style={{cursor:"pointer"}} onClick={()=> props.changeMenu(3)}>Setting</span>
    </div>
  )
}

export default Menu
