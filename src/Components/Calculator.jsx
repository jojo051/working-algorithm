import React, { useEffect, useState } from "react";
import "./calculator.css";

const Calculator =()=> {

    const[number,setNumber]=useState("")
    const[display,setDisplay]=useState("")
    console.log(display);
    useEffect(()=>{
        setDisplay(display+number)
    },[number]);

    const calculate =()=>{
    setDisplay(eval(display))
    }

    return(
    <>
        <div className="app-calculator">
            <h3 className="h3-calculator"id="result">{display}</h3>
            <button className="btn" id="9" onClick={(e)=> setNumber(e.target.id)}>9</button>
            <button className="btn" id="8" onClick={(e)=> setNumber(e.target.id)}>8</button>
            <button className="btn" id="7" onClick={(e)=> setNumber(e.target.id)}>7</button>
            <button className="btn" id="6" onClick={(e)=> setNumber(e.target.id)}>6</button>
            <button className="btn" id="5" onClick={(e)=> setNumber(e.target.id)}>5</button>
            <button className="btn" id="4" onClick={(e)=> setNumber(e.target.id)}>4</button>
            <button className="btn" id="3" onClick={(e)=> setNumber(e.target.id)}>3</button>
            <button className="btn" id="2" onClick={(e)=> setNumber(e.target.id)}>2</button>
            <button className="btn" id="1" onClick={(e)=> setNumber(e.target.id)}>1</button>
            <button className="btn" id="0" onClick={(e)=> setNumber(e.target.id)}>0</button>
            <button className="btn" id="." onClick={(e)=> setNumber(e.target.id)}>.</button>
            <button className="btn" id="+" onClick={(e)=> setNumber(e.target.id)}>+</button>
            <button className="btn" id="-" onClick={(e)=> setNumber(e.target.id)}>-</button>
            <button id="equal" onClick={()=> calculate()}>=</button>
            <button className="btn" id="*" onClick={(e)=> setNumber(e.target.id)}>*</button>
            <button className="btn" id="/" onClick={(e)=> setNumber(e.target.id)}>/</button>
            <button id="clear" onClick={()=> setDisplay("")}>C</button>
        </div>
    </>
    )
}
export default Calculator;