import React,{useState} from 'react';
import {Col,Row} from 'antd';
import './SignIn.css';
import LoginForm from '../Form/Form';
import Logo from './SVG/Asset 3.svg';
import {navigate} from '@reach/router';


const SignIn=()=>{
    const [number,setNumber]=useState(null);
    const [password,setPassword]=useState(null);

    const onNumberChange=(event)=>{
        setNumber(event.target.value);
        //ssconsole.log(number);
    }
    const onPasswordChange=(event)=>{
        setPassword(event.target.value);
        //console.log(password);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        //console.log(number,password);
        fetch('https://mekvahan.com/api/android_intern_task',{
            method:"POST",
            body: JSON.stringify({
                mobile: number,
                password: password
            })
        })
        .then(response=>response.json())
        .then(response=>{
            if (response.status==='success'){
                console.log(response);
                navigate('/home');
            }
            else {
                window.alert(response.status);
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <Row>
            <Col span={10} className="Image"></Col>
            <Col span={14}>
                <div className="Container">
                    <div className="Logo">
                        <img src={Logo} alt="logo" className="Logo__img"/>
                        <h1 className="Logo__text">Mekvahan</h1>
                    </div>
                    <LoginForm onNumberChange={onNumberChange} onPasswordChange={onPasswordChange} onSubmit={onSubmit}/>
                </div>
            </Col>
        </Row>
    );
}

export default SignIn;