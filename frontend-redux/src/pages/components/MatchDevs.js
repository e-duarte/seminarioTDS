import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMatch } from '../../actions/match';

import './matchdevs.css';
import itsamatch from '../../assets/itsamatch.png';


export default function MatchDevs(){
    const matchDev = useSelector( state => state.match);
    const dispatch = useDispatch();

    return (
        <div>
            { matchDev && (
                <div className="match-container">
                    <img src={itsamatch} alt="It's a match" />
                    <img className="avatar" src={matchDev.avatar} alt="avatar" />
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>

                    <button type="button" onClick={() => dispatch(removeMatch(null))}>FECHAR</button>
                </div>
            )}
        </div>
    );
}
