import React, { useState } from 'react';
import "./Room.css";

function Room(){
  // 使用useState钩子在函数式组件中添加内部state
  const [isLit, setLit] = useState(true);
  const [temperature, setTemperature] = useState(22);
  return (
    <div className={`room ${isLit?'lit':'dark'}`}>
      <label>当前状态：</label>
      <text>the room is {isLit?'lit':'dark'} and {temperature} °C</text>
      <br />
      <label>切换开/关灯：</label>
      <button onClick={()=>setLit(!isLit)}>flip</button>
      <br />
      <label>开灯/关灯：</label>
      <button onClick={()=>{
        if(!isLit) setLit(true);
      }}>ON</button>
      <button onClick={()=>{
        if(isLit) setLit(false);
      }}>OFF</button>
      <br />
      <label>调节温度：</label>
      <button onClick={()=>setTemperature(temperature+1)}>+</button>
      <button onClick={()=>setTemperature(temperature-1)}>-</button>
    </div>
  );
}

export default Room;