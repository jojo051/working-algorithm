import React from "react";
import { Link } from "react-router-dom";
 
const Home =()=> {
    return(
        <>
            <h1>Acceuil</h1>
            <Link to="/calculator">Calculator</Link>
        </>
    )
}

export default Home;