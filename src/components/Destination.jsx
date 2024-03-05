import React, { useState, useEffect } from 'react';
import Header from './Header'
import MenuDestination from './MenuDestination'
import axios from 'axios';

let id = window.location.pathname;
console.log(id);

function Destination(){
    
    const [api, setApi] = useState([]);  
    const urlroot = 'http://apispace.test/';
    const urlapi ="http://apispace.test/api";
    useEffect(() => {
        axios.get(urlapi+id)
         .then((response) => {
            console.log(response.data.data);
            setApi(response.data.data);
        });
    },[]);
    return (
            <>
            <Header /> 
                <div className='bg-desti min-h-screen bg-cover bg-center  z-[-10] text-white p-0 m-0'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row mt-[12%] ml-[5%]'>
                            <p className='font-barlow uppercase text-xl'><span className='text-slate-800 font-bold whitespace-pre tracking-widest '>01</span> choisissez votre destination </p> 
                        </div>
                        <div className='flex flex-col lg:flex-row justify-evenly'>
                        <div className='flex justify-center pt-[5%] lg:p-[5%] lg:w-full'>
                            <img className=' lg:flex-auto object-scale-down' src={urlroot + api.image} alt={api.en_name} />
                        </div>
                        <div className='flex flex-col items-center lg:items-start gap-10 p-[5%]'>
                           <div>
                                <nav>
                                    <MenuDestination />
                                </nav>
                           </div>
                            <p className=' font-bellefair text-[150px] uppercase'>{api.fr_name ? api.fr_name :"" }</p>
                            {/* <p>{api.en_name ? api.en_name :"" }</p> */}
                            <p className='w-3/4 font-barlow text-[20px] text-center lg:text-left'>{api.fr_description ? api.fr_description :"" }</p>
                            {/* <p>{api.en_description ? api.en_description :"" }</p> */}
                            <div className='flex flex-row text-center lg:text-left w-full border-t p-10'>
                            <p className='w-1/2 font-bellefair text-[42px]'>{api.fr_distance ? api.fr_distance :"" }</p>
                            {/* <p>{api.en_distance ? api.en_distance :"" }</p> */}
                            <p className='w-1/2 font-bellefair text-[42px]'>{api.fr_duration ? api.fr_duration :"" }</p>
                            {/* <p>{api.en_duration ? api.en_duration :"" }</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            </>    
      );              
}   
export default Destination

