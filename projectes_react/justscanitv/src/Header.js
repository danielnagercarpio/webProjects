import './Header.css';
import { BrowserRouter, Routes,Router, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='header-logo-section'><Link to='/'></Link></div>               
                <div className='header-mobile-section'></div>
                <button type="button" className="header-about-us" value="About Us" name="sign-in"><Link to='/'>About Us</Link></button>                
                <button type="button" className="header-sign-in" value="Sign In" name="sign-in"><Link to='/Login'>Sign In</Link></button>            
                <button type="button" className="header-sign-up" value="Sign Up" name="sign-up"><Link to='/Register'>Sign Up</Link></button>
            </div>
        </div>

    );
}
export default Header;