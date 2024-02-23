import React, { useEffect, useState } from 'react'
import { ChatList } from '../ChatList';
import { ChatSearch } from "../ChatSearch";


const ChartListWrapper = () => {
    const [loading, setLoading] = useState(true);
    const [search, setSearchValue] = useState("");
    const [chatItems, setChatItems] = useState([])
  
    //Fetching Data & after that loading False
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in")
        .then((data)=>data.json()).then((data)=>{setChatItems(data.results);
        setLoading(false);})
    },[])
  
    //Filtering the data
    const filteredData = chatItems.filter((item)=>{
        if(!search) return true;

        return `${item.name.first} ${item.name.last}`.match(RegExp(search, 'gi'))
    })

  
    return <div className='chat--list__wrapper'>
        <ChatSearch value= {search} setValue = {setSearchValue}>

        </ChatSearch>
        {
            !loading ? <ChatList data= {filteredData} />: <div>Loading People</div>
        }
        </div>
  
}

export { ChartListWrapper };