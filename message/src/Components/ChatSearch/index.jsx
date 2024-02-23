import React from 'react';
import "./chat-search.css";

const ChatSearch = ({value, setValue}) => {
  return (
    <div className='chat--search__wrapper'>
        <input className='chat--search' value={ value } placeholder='search people' onChange={(e)=>{
            setValue(e.target.value)
        }} />
    </div>
  )
}

export { ChatSearch }