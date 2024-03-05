import MainMenu from './MainMenu.jsx'
import logo from '/Logo.png'
import decoration from '/Decoration.png'


function Header() {

    return(
        <>
        <header className='flex justify-between items-center absolute top-0 w-full lg:mt-10'>
                <div className='flex gap-10 items-center ml-20 z-10'>
                    <img src={logo} alt='logo'></img>
                    <img className='hidden lg:inline' src={decoration} alt='decoration'></img> 
                </div>
                <MainMenu />  
        </header>
        
        </>
    )


}
export default Header