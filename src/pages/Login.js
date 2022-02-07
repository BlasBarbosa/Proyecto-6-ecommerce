import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm ();
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate(); 


    const submit = data => {
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            .then(res=> {
                localStorage.setItem("token", res.data.access);
                navigate("/shop");
            })
            .catch(()=> setLoginError("Credenciales Incorrectas"));
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit(submit)}>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input 
                        {...register("email")}
                        type="email" required/>
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Password</label>
                    <input 
                        {...register("password")}
                        type="password" required />
                </div>
                <button>Log in</button>
                {loginError}
            </form>
        </div>
    );
};

export default Login;