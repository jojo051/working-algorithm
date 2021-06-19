import React from "react";
import { Link } from "react-router-dom";
 
const Home =()=> {
    return(
        <>
            <h1>bienvenue sur mes petits projets</h1>

            <Link to="/calculator">Calculatrice</Link>

            {/*<Link to="/bubble"> bubble</Link>*/}

            <Link to="/passwordmaker"> Generateur de password </Link>

            <Link to="/formulaire"> Formulaire </Link>
        </>
    )
}

export default Home;