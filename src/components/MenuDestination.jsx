import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuDestination(){
    const urlapi ="http://apispace.test/api";
    const [count, setCount] = useState([]);
    useEffect(() => {
        axios.get(urlapi+'/destination')
             .then((response) => {
                setCount(response.data.data);
            });
        },[]);
    let path = window.location.pathname;
    let pathtab = path.split('/');
    path = 'd'+pathtab[2];
    console.log(path);
    let list = count.map((item) =>{
                return (
                   <li  className={path != "d"+item.id ? "hover:underline underline-offset-8 decoration-4 decoration-slate-500":"underline-offset-8 decoration-4   underline decoration-white"}><a href={"/destination/"+item.id}>{item.fr_name}</a></li>
                ) 
    }); 

      return( 
        <ul className='flex flex-row gap-10 uppercase font-barlowc  text-[24px]'>{list}</ul>
      )

} 
export default MenuDestination