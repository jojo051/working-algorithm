import React, { DataHTMLAttributes, useEffect, useState} from "react";
import BtnReturn from "./BtnReturn";

const Displaytexte =()=>{
  
    const[element,setElement]=useState<string>("");
    const[i,setI]=useState<number>(0);
    const[value,setValue]=useState<string>("")
    const[word,setWord]=useState<string>("")
    
    useEffect(()=>{
      const wordLength = word.length
        setTimeout(() => {
            if (word[i] === null || word[i] === undefined) {
                console.log("ok1",word[wordLength-1]);
            } else if (word[i].length <= wordLength-1) {
                setI(i=> i+1);
                setElement(element+word[i]);
            } 
        }, 50);
     
    },[element,word]);

    const display =()=>{
      setWord(value)
      setI(0)
      setElement("")
    }

    const submitForm = (e:any) => {
      e.preventDefault();
    }

    return (
        <section className="">
          <BtnReturn/>
          <h1>Affichage de texte lettre par lettre</h1>
            <form action="" onSubmit={submitForm}>
            <input 
              type="texte" 
              id="texte"
              value={value}
              placeholder="metre votre texte ici"
              onChange={(e)=> setValue(e.target.value)}
              ></input>
            </form>
            <button type="button" onClick={display}>affiche moi</button>
            <p className=""> 
               {element}    
            </p>
        </section>
  )
}

export default Displaytexte;