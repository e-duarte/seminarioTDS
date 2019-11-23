import React, { useState } from 'react';
import api from '../services/api';

import logo from '../assets/logo.svg';
import './login.css';

function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username
        });

        const { _id } = response.data;
        history.push(`/main/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    type="text"
                    value={username} 
                    placeholder="Digite seu usuário do Github"
                    onChange={ e => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;