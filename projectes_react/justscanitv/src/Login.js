import {useEffect} from 'react';
import './Login.css';
import Header from './Header';

const Login = () => {
    return (
        <div>
            {/* Mobile view */}
            <div className='mobile-content'>
                <div className='mobile-logo-section'></div>
                <div className='mobile-login-form-section'>
                    <div className='mobile-login-inputs'>
                        <div className='mobile-username'><i class="fa-solid fa-user"></i><input type="text" name="username" placeholder='username'/></div>
                        <div className='mobile-password'><i class="fa-solid fa-lock"></i><input type="text" name="password" placeholder='password'/></div>                    
                    </div>                 
                    <p type="text" className="forgot-password" name="forgot-password" placeholder='username'> Forgot password ?</p>
                    <button type="button" className="sign-in" value="Sign In" name="sign-in">Sign In</button>
                    <button type="button" className="sign-up" value="Sign Up" name="sign-up">Sign Up</button>
                </div>
            </div>
            {/* pc view */}
            <div className='pc-content'>
                <Header/>
                <div className='pc-login-form-section'>
                    <div className='pc-login-title'>Sign In</div>
                    <div className='pc-login-inputs'>
                        <div className='pc-username'><i class="fa-solid fa-user"></i><input type="text" name="username" placeholder='username'/></div>
                        <div className='pc-password'><i class="fa-solid fa-lock"></i><input type="text" name="password" placeholder='password'/></div>                    
                    </div>                 
                    <p type="text" className="pc-forgot-password" name="forgot-password" placeholder='username'> Forgot password ?</p>
                    <button type="button" className="pc-sign-in" value="Sign In" name="sign-in">Sign In</button>
                    <button type="button" className="pc-sign-up" value="Sign Up" name="sign-up">Sign Up</button>
                </div>
            </div>

        </div>
    );
}
export default Login;