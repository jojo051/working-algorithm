import React from "react";
import { Link } from "react-router-dom";
 
const Home =()=> {
    return(
        <>
            <h1>bienvenue sur mes petits projets</h1>

            <Link to="/calculator">Calculator</Link>

            <Link to="/bubble">bubble</Link>            
        </>
    )
}

export default Home;