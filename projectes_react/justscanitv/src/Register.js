import {useEffect} from 'react';
import './Login.css';
import './Register.css';
import Header from './Header';

const Register = () => {
    return (
        <div>
            {/* Mobile view */}
            <div className='mobile-content register-mobile-content'>
                <div className='mobile-logo-section'></div>
                <div className='mobile-register-form-section'>
                    <div className='mobile-register-inputs'>
                        <div><input type="text" id="mobile-emailAddress" name="emailAddress" placeholder='Email Address'/></div>
                        <div><input type="text" id="mobile-password" name="password" placeholder='Password'/></div>                    
                        <div><input type="text" id="mobile-firstname" name="firstname" placeholder='First name'/></div>                    
                        <div><input type="text" id="mobile-lastname" name="lastname" placeholder='Last name'/></div>                    
                        <div className='birth-date'>Birth Date</div>
                        <div className='birth-date-container'>
                            <input type="text" id="mobile-dd" name="dd" placeholder='dd'/>
                            <input type="text" id="mobile-mm" name="mm" placeholder='mm'/>
                            <input type="text" id="mobile-yyyy" name="yyyy" placeholder='yyyy'/>
                        </div>     
                        <div className='terms-acceptance'>
                            <input type="checkbox" name="dd" placeholder='dd'/>
                            <p>I accept JustScanIt use of my data for the service and Iaccept Privacy Policy and Data Processing Agreement</p>
                        </div>     

                    </div>                 
                    <button type="button" className="sign-up-register" onClick={registerUserMobile} value="Join In" name="sign-up">Join In!</button>
                </div>
            </div>
            {/* pc view */}
            <div className='pc-content'>
                <Header/>
                <div className='pc-login-form-section'>
                    <div className='pc-login-title'>Register</div>
                    <div className='pc-login-inputs'>
                        <div><input type="text" name="pc-emailAddress" id="pc-emailAddress" placeholder='Email Address'/></div>
                        <div className='pc-password'><input type="text" id="pc-password" name="pc-password" placeholder='password'/></div>                    
                        <div className='pc-firstname'><input type="text" id="pc-firstname" name="pc-firstname" placeholder='First name'/></div>                    
                        <div className='pc-lastname'><input type="text" id="pc-lastname" name="pc-lastname" placeholder='Last name'/></div>                    

                    </div>                 
                    <button type="button" className="pc-sign-in" onClick={registerUserPc} value="Sign In" name="sign-in">Register</button>
                </div>
            </div>

        </div>
    );
}
const registerUserPc = () => {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        users = [];
    }
    if (
        document.getElementById('pc-emailAddress').value == "" || 
        document.getElementById('pc-password').value == "" ||
        document.getElementById('pc-firstname').value == "" ||
        document.getElementById('pc-lastname').value == ""
    ) { alert("Some Fields are empty")}
    else {
        let user = {
            id: 1,
            user: document.getElementById('pc-emailAddress').value,
            password: document.getElementById('pc-password').value, 
            firstname: document.getElementById('pc-firstname').value,
            lastname: document.getElementById('pc-lastname').value
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));    
    }
}

const registerUserMobile = () => {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        users = [];
    }
    // Validator
    if (
        document.getElementById('mobile-emailAddress').value == "" ||
        document.getElementById('mobile-password').value  == "" ||
        document.getElementById('mobile-firstname').value == "" ||
        document.getElementById('mobile-lastname').value == "" ||
        document.getElementById('mobile-dd').value == "" ||
        document.getElementById('mobile-mm').value == "" ||
        document.getElementById('mobile-yyyy').value == ""
    ) { alert("Some Fields are empty") }
    else {
        let user = {
            id: 1,
            user: document.getElementById('mobile-emailAddress').value,
            password: document.getElementById('mobile-password').value, 
            firstname: document.getElementById('mobile-firstname').value,
            lastname: document.getElementById('mobile-lastname').value,
            dd: document.getElementById('mobile-dd').value,
            mm: document.getElementById('mobile-mm').value,
            yyyy: document.getElementById('mobile-yyyy').value,
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));        
    }
}


export default Register;