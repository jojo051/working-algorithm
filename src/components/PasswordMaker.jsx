import React, { useState } from 'react';
import'./passwordmaker.css';

const PasswordMaker = () => {
    const[valueInput,setValueInput] = useState("Générateur de MDP");
    const[valuePassLength, setValuePassLength] = useState(8);
    return (
    <div className="app-password">
        <div>
            <input type="text" id="password-output" value={valueInput} readonly></input>
        </div>    
        <div className="range-container-password">

        <input type="range" id="password-length" min="4" max="24" value={valuePassLength} onChange={(e)=> setValuePassLength(e.target.value)}>
            
        </input>

        <input type="text" id="display-password-length" value={valuePassLength} readonly></input>
        </div>

        <div className="checkbox-container-password">
        <input type="checkbox" id="lowercase" checked></input>
        <label htmlFor="lowercase">a-z</label>

        <input type="checkbox" id="uppercase"></input>
        <label htmlFor="uppercase">A-Z</label>

        <input type="checkbox" id="numbers"></input>
        <label htmlFor="numbers">0-9</label>

        <input type="checkbox" id="symbols"></input>
        <label htmlFor="symbols">!-?</label>
        </div>

        <button id="generateButtonPassword">Générer mot de passe</button>
    </div>
    );
};

export default PasswordMaker;