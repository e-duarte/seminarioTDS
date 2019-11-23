import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../services/api';
import io from 'socket.io-client';

import { useDispatch } from 'react-redux';
import {addDevsList } from  '../actions/devs';
import { loginUser, logoutUser } from  '../actions/user';
import { addMatch } from '../actions/match';

import './main.css';
import Logo from '../assets/logo.svg';

import DevsList from './components/DevsList';
import MatchDevs from './components/MatchDevs';


export default function Main({ match }){
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            });
            dispatch(addDevsList(response.data));
            dispatch(loginUser(match.params.id));
        }

        loadUsers();
    }, [match.params.id]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: match.params.id }
        });

        socket.on('match', dev => {
            console.log(dev);
            dispatch(addMatch(dev));
        });
    }, [match.params.id]);

    return (
        <div className="main-container">
            <Link to="/" onClick={() => dispatch(logoutUser({}))}>
                <img src={Logo} alt="Tindev" />
            </Link>
            <DevsList />
            <MatchDevs />
        </div>
    );
}
