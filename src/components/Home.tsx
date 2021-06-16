import React from "react";
import { Link } from "react-router-dom";
 
const Home =()=> {
    return(
        <>
            <h1>bienvenue sur mes petits projets</h1>

            <Link to="/calculator">Calculator</Link>

            <Link to="/bubble"> bubble</Link>  

            <Link to="/passwordmaker"> password maker</Link>            
        </>
    )
}

export default Home;