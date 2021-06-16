import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./calculator.css";

const Calculator=()=> {

    const[number,setNumber]=useState<string>("")
    const[display,setDisplay]=useState<string>("")
    
    const clear =()=>{
        setDisplay("")
        setNumber("")
    }

    const calculate =()=>{ 
        let cal = eval(display)
        if (cal === undefined){
            setDisplay("")
        } else
            setDisplay(cal)
        
    };
    
    useEffect(()=>{
        setDisplay(display+number)
        setNumber("")
    },[number]);
    
    return(
    <div>
        <div>
            <Link className="btn-calculator return-calculator" to="/">&#9754; Go Home</Link>
        </div>
        <div className="app-calculator">
            <h3 className="h3-calculator"id="result">{display}</h3>
            <button className="btn-calculator" id="1" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>1</button>
            <button className="btn-calculator" id="2" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>2</button>
            <button className="btn-calculator" id="3" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>3</button>
            <button className="btn-calculator" id="4" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>4</button>
            <button className="btn-calculator" id="5" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>5</button>
            <button className="btn-calculator" id="6" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>6</button>
            <button className="btn-calculator" id="7" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>7</button>
            <button className="btn-calculator" id="8" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>8</button>
            <button className="btn-calculator" id="9" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>9</button>
            <button className="btn-calculator" id="0" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>0</button>
            <button className="btn-calculator" id="." onClick={(e)=> setNumber((e.target as unknown as Element).id)}>.</button>
            <button className="btn-calculator" id="+" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>+</button>
            <button className="btn-calculator" id="-" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>-</button>
            <button id="equal" onClick={()=> calculate()}>=</button>
            <button className="btn-calculator" id="*" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>*</button>
            <button className="btn-calculator" id="/" onClick={(e)=> setNumber((e.target as unknown as Element).id)}>/</button>
            <button id="clear" onClick={()=> clear()}>C</button>
        </div>
    </div>
    )
}
export default Calculator;