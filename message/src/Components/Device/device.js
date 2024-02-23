import React from 'react'
import "./device.css";

const Device = ({ children }) => {
  return (<div className='iphone-x'>
        <i>Speaker</i>
        <b>Camera</b>
        {children}
    </div>
  );
}

export {Device};
