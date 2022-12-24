import {useEffect, useState} from 'react';
import './Login.css';
import Header from './Header';
import { redirect } from "react-router-dom";
const Login = () => {
    function validLogin(userdata) {
        return userdata.user === "dnc" && userdata.password === "321";
    }
    
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
                <form className='pc-login-form-section'
                    onSubmit={ ev => {
                        ev.preventDefault();
                        if(ev.nativeEvent.submitter.name === "sign-in") {                                
                            const auth = [
                                {"user": "dnc", "password": "321"},
                                {"user": "dani", "password": "123"}
                            ];

                            function validUsers(userData) {
                                return userData.user === ev.target.username.value && userData.password === ev.target.password.value;
                            }
                            let loginOk = auth.find(validUsers);
                            if (loginOk) {
                                window.history.pushState(ev.target.username.value, "", "/ShoppingHistory");
                                window.history.go();
                            }
                        }
                    }
                }
                >
                    <div className='pc-login-title'>Sign In</div>
                    <div className='pc-login-inputs'>
                        <div className='pc-username'><i class="fa-solid fa-user"></i><input type="text" name="username" placeholder='username'/></div>
                        <div className='pc-password'><i class="fa-solid fa-lock"></i><input type="text" name="password" placeholder='password'/></div>                    
                    </div>                 
                    <p type="text" className="pc-forgot-password" name="forgot-password" placeholder='username'> Forgot password ?</p>
                    <button type="submit" className="pc-sign-in" value="Sign In" name="sign-in">Sign In</button>
                    <button type="button" className="pc-sign-up" value="Sign Up" name="sign-up">Sign Up</button>
                </form>
            </div>

        </div>
    );
}
export default Login;