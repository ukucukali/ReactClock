//funtion component
//rfce -> for quick implementation of a fuction :)
import React, { useEffect, useState } from 'react'
import './Clock.css'
function Clock() {
  const [time, setTime] = useState(new Date());//usestate snippet 
  const renewTime=function(){
    setTime(new Date());
  }
  useEffect(()=>{
    //it will work every render once
    let timerId=setInterval(renewTime,1000); 
    return(()=>clearInterval(timerId));// when timer isn't showing it stops its background effects
  },[]);

  return (
    <div className="Clock">
      {time.toLocaleTimeString()}
    </div>
  )
}

export default Clock;