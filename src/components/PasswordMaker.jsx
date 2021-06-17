import React, { useEffect, useState, useRef } from 'react';
import'./passwordmaker.css';

const PasswordMaker = () => {

    const[passwordOutput,setPasswordOutput] = useState("Générateur de MDP");
    const[valuePassLength, setValuePassLength] = useState(8);
    const[lowercaseChecked, setLowercaseChecked] = useState(false);
    const[uppercaseChecked, setUppercaseChecked] = useState(false);
    const[numbersChecked, setNumbersChecked] = useState(false);
    const[symbolsChecked, setSymbolsChecked] = useState(false);

    const [copySuccess, setCopySuccess] = useState('Générer mot de passe');
    const passwordOutputRef = useRef(null);

    const displayCopied =()=>{
        setTimeout(() => {
            setCopySuccess('Générer mot de passe')
        }, 2000);
        setCopySuccess('Copié !');
    };

    const copy =()=>{
        passwordOutputRef.current.select();
        document.execCommand('copy'); 
    }

    const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
    const dataUppercase = dataLowercase.toUpperCase();
    const dataNumbers = "0123456789";
    const dataSymbols = "&é'\"(-è_çà)=^$*ù!:;,?./§%¨£µ+°";

    const generatePassword =(e)=>{
        let data = [];
        let password = "";
        
        if ( lowercaseChecked === true ) data.push(...dataLowercase);
        if ( uppercaseChecked === true ) data.push(...dataUppercase)
        if ( numbersChecked === true ) data.push(...dataNumbers);
        if ( symbolsChecked === true ) data.push(...dataSymbols);

        if (data.length === 0) {
            alert("Veuillez sélectionner des critères");
            return;
        };

        let i = 0
        for (i = 0; i < valuePassLength; i++) {
            setPasswordOutput(password += data[Math.floor(Math.random() * data.length)]);
        };
        displayCopied();

    };
    
    useEffect(()=>{
        copy()
    },[passwordOutput])

    return (
    <div className="app-password">
        <div>
            <input type="text" id="password-output" ref={passwordOutputRef} value={passwordOutput} readonly></input>
        </div>    
        <div className="range-container-password">

            <input type="range" id="password-length" min="4" max="24" value={valuePassLength} onChange={(e)=> setValuePassLength(e.target.value)}></input>

            <input type="text" id="display-password-length" value={valuePassLength} readonly></input>

        </div>

        <div className="checkbox-container-password">
            <input type="checkbox" id="lowercase" onClick={(e)=> setLowercaseChecked(e.target.checked ? true : false)} ></input>
            <label htmlFor="lowercase">a-z</label>

            <input type="checkbox" id="uppercase" onClick={(e)=> setUppercaseChecked(e.target.checked ? true : false)} ></input>
            <label htmlFor="uppercase">A-Z</label>

            <input type="checkbox" id="numbers" onClick={(e)=> setNumbersChecked(e.target.checked ? true : false)} ></input>
            <label htmlFor="numbers">0-9</label>

            <input type="checkbox" id="symbols" onClick={(e)=> setSymbolsChecked(e.target.checked ? true : false)} ></input>
            <label htmlFor="symbols">!-?</label>
        </div>

        <button id="generateButtonPassword" onClick={(e)=>generatePassword(e)}> {copySuccess} </button>
        
    </div>
    );
};

export default PasswordMaker;