import { click } from '@testing-library/user-event/dist/click';
import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar(params) {
    const [click,setClick]=useState(false);
    const[button,setButton]=useState(true);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    //function  removes and display button acording to the screen size
    const showButton=()=>{
        if (window.innerWidth<=960) {
            setButton(false);
        }else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize',showButton)
    
    

    return(
        <>
       
        <nav className='navbar'>
             <div className='navbar-container'>
                 <Link to="/" className='navbar-logo'
                 onClick={closeMobileMenu}>
                     <span>COFFE</span>NOTES<i className='fa fa-coffee'></i>
                 </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click?'fas fa-times' :'fas fa-bars'} />
            </div>
           <ul className={click? 'nav-menu active' : "nav-menu"}>
               <li className='nav-item'>
                   <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <h4> Home </h4>  
                   </Link>               
               </li>
               <li className='nav-item'>
                   <Link to='/services'className='nav-links' onClick={closeMobileMenu}>
                   <h4>Services </h4>
                   </Link>               
               </li>
               <li className='nav-item'>
                   <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                 <h4>Products</h4>
                   </Link>               
               </li>
               <li className='nav-item'>
                   <Link to='/sing-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    <h2>Sing-up</h2>
                   </Link>               
               </li>
           </ul>
         {button && <Button buttonStyle='btn--outline'>Sing-up</Button>}

            </div>
        </nav>

        </>

    )
    
}
export default  Navbar