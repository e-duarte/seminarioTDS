import React from 'react';
import api from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { removeDevsList } from '../../actions/devs'

import './devslist.css'
import Like from '../../assets/like.svg';
import Dislike from '../../assets/dislike.svg';

export default function DevsList(){
    const dispatch = useDispatch();
    const devs = useSelector( state => state.devs );
    const user = useSelector( state => state.user );

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user}
        });
        dispatch(removeDevsList(id))
    }
    
    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {user}
        });

        dispatch(removeDevsList(id));
    }
    return (
        <div>
            { devs.length > 0 ? (
                <ul>
                { devs.map(dev => (
                    <li key={dev._id}>
                    <img src={dev.avatar} alt={dev.name} />
                    <footer>
                        <strong>{dev.name}</strong>
                        <p>{dev.bio}</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" onClick={() => handleDislike(dev._id)}>
                            <img src={Dislike} alt="Dislike" />
                        </button>
                        <button type="button" onClick={() => handleLike(dev._id)}>
                            <img src={Like} alt="Like" />
                        </button>
                    </div>
                </li>
                )) }
            </ul>
            ) : (
                <div className="empty">Acabou :(</div>
            ) }
        </div>
    );
}

