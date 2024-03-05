import React from "react";
import Header from './Header'

function Accueil() {
    const accroche ="donc vous voulez voyager dans";
    const titre = "l'espace";
    const textCTA = "explorer";
    const description ="Soyons objectif; si vous voulez aller dans l'espace, vous pouvez aller véritablement dans le véritable espace et non juste planer sur le bord de celui-ci. Eh bien, asseyez-vous parce que nous allons vous donner une expérience vraiment extraordinaire!"
    return(
        <>
        <Header />
        <div className='md:bg-index1 bg-index2 min-h-screen bg-cover bg-center absolute top-0 z-[-10] text-white'>
            <div className='flex flex-col lg:flex-row mt-[28%] mx-20 justify-around'>
                <div >
                    <h2 className='text-center lg:text-left uppercase font-barlow text-2xl tracking-widest'>{accroche}</h2>
                    <h1 className='text-center lg:text-left font-bellefair text-[75px] sm:text-[100px] md:text-[120px] lg:text-[150px] uppercase'>{titre}</h1>
                    <p className='text-center lg:text-left lg:max-w-[70%] font-barlow'>{description}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className=' flex flex-row items-center bg-white h-[300px] w-[300px] group hover:cursor-pointer border  border-slate-50 rounded-full text-black justify-center mr-[2vh] mt-10' >
                    <div className=" bg-slate-500/40 h-[300px] w-[300px] rounded-full absolute z-[-1] group-hover:scale-150 duration-300"></div>   
                        <p className='font-bellefair uppercase text-4xl'>{textCTA}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Accueil