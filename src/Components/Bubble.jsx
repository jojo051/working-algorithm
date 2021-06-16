import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./bubble.css"

const Bubble =()=> {
    const[counter,setCounter]=useState(0)
    
    let bubbles =[]

    console.log(counter);

    const bubbleMaker = () => {
        const size = Math.random() * 200 + 100 + "px";
        const sizeTop = Math.random() * 100 + 50 + "%";
        const sizeLeft = Math.random() * 100 + "%";

        const bubble=<span className="bubble" 
        style={{
            height:`${size}px`,
            width:`${size}px`,
            marginTop:`${sizeTop}px`,
            marginLeft:`${sizeLeft}px`,
        }}></span>

        bubbles.push(bubble)
        console.log(bubble);
    }
    
    useEffect(()=>{
    console.log(counter)
    console.log(bubbles)

    },[])
    

    return(
        <div>
            <div>
              
            </div>
            <h3 className="h3-bubble" onClick={

                ()=>(setCounter(counter+1),
                    bubbleMaker()
                )}
            >
            0
            </h3>
            {bubbles}
        </div>
    )
};

export default Bubble;