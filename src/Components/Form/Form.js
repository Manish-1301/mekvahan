import React from 'react';
import './Form.css'
import google from '../SignIn/SVG/Asset 5.svg';
import facebook from '../SignIn/SVG/Asset 6.svg';


const LoginForm=({onNumberChange,onPasswordChange,onSubmit})=>{
    return(
        <form className="form" onSubmit={onSubmit}>
            <input type="text" required placeholder="10 digits mobile number" className="input margin_bottom-large" onChange={onNumberChange}/>
            <input type="password" required placeholder="Password" className="input margin_bottom-small" onChange={onPasswordChange}/>
            <a href="#"className="margin_bottom-large">Forgot password?</a>
            <button className="Button">Login</button>
            <p>Don't have an account?<span><a href="#">Sign Up now</a></span></p>
            <p className="or">Or</p>
            <p>Continue with</p>
            <div>
                <img src={google} alt="google"/>
                <img src={facebook} alt="facebook"/>
            </div>
        </form>
    );
}

export default LoginForm;