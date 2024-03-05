import React, { useState, useEffect } from 'react';

import Header from './Header'
import axios from 'axios';

function Equipage(){

    let id = window.location.pathname;
    console.log(id);

    const [api, setApi] = useState([]);
    
    const urlroot = 'http://apispace.test';
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
            <div className='bg-crew min-h-screen bg-cover bg-center  z-[-10] text-white p-0 m-0'>
                <div className='flex flex-col'>
                    <div className='flex flex-row mt-[12%] ml-[5%]'>
                       <p className='font-barlow uppercase text-xl'><span className='text-slate-800 font-bold whitespace-pre tracking-widest '>02</span> rencontrez l'equipage </p> 
                    </div>
                    <div className='flex flex-col lg:flex-row justify-evenly'>
                        <div className='flex flex-col items-center gap-10 p-[5%]'>
                            {/* <p>{api.id}</p> */}
                            <p className='w-1/2 font-bellefair uppercase text-slate-400 text-[42px]'>{api.fr_grade ? api.fr_grade :"" }</p>
                            <p className=' font-bellefair text-[60px] uppercase'>{api.name ? api.name :"" }</p>
                            {/* <p>{api.en_name ? api.en_name :"" }</p> */}
                            <p className='w-3/4 font-barlow text-[20px] text-center'>{api.fr_description ? api.fr_description :"" }</p>
                            {/* <p>{api.en_description ? api.en_description :"" }</p> */}
                            <div className='flex flex-row text-center w-full border-t p-10'>
                                
                            </div>
                        </div>
                        <div className='flex justify-center pt-[5%] lg:p-[5%] lg:w-full'>
                            <img className=' lg:flex-auto object-scale-down' src={urlroot + api.image} alt={api.name} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
                
            </>    

      );
   
                
}   
export default Equipage

