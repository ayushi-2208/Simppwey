import React, { useState } from 'react'
import Menu from './Menu'
import Home from './Home/Home'
import About from './About/About';
import Contact from './Contact/Contact';
import Setting from './Setting/Setting';

const Maincomponent = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);

    function changeMenu(selected) {
        setSelectedMenu(selected);
      }
    function getSelectedMenu(){
        if(selectedMenu===0){
            return <Home/>
        }
        if(selectedMenu===1){
            return <About/>
        }
        if(selectedMenu===2){
            return <Contact/>
        }
        if(selectedMenu===3){
            return <Setting/>
        }
    }
  return (
    <div style={{width:"100%",height:"100%",display:"flex"}}>
        <div style={{width:"20%"}}>
            <Menu changeMenu={changeMenu}/>
        </div>
        <div style={{width:"80%"}}>
           { getSelectedMenu()}
        </div>
      
    </div>
  )
}

export default Maincomponent
