import React,{useState} from 'react';
import {useDispatch } from 'react-redux';
import {signIn} from '../../../Controllers/Redux/authSlice';
import './Login.css' 
import {auth} from "../Login/firebase"
import { Link, useHistory } from "react-router-dom";



export default() =>{
    const dispatch =useDispatch();
    const history = useHistory()
    const [formInput,setFormInput]= useState({
        name:"",
        email:"",
        password:""
    })
    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }
    
    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(formInput.email,formInput.password)
            .then((auth)=>{
                if (auth){
                    history.push('/')

                }

               
            })
            
           
            
    }
    return (<div  className="loginBG">
        <form className="login-panel">
            <h1>Login:</h1>
            <input name='name' placeholder="Name" onChange={inputChanged} value={formInput.name}  ></input>
            <input name='email' placeholder="Email" onChange={inputChanged} value={formInput.email}  ></input>
            <input name='password' type='password' placeholder="Password" onChange={inputChanged} value={formInput.password}  ></input>
            <button type='submit' onClick={signIn}>SignIn</button>
            <button type='submit' onClick={submit}>Login</button>
            
        </form>

    </div>)
}