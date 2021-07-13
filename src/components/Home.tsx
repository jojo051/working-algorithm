import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
 
const Home =()=> {
    return(
        <div className="homme-app" >
            <h1 className="homme-title" >Bienvenue sur mes petits projets</h1>

            <Link className="btn-home" to="/calculator">Calculatrice</Link>

            {/*<Link className="btn-home" to="/bubble"> bubble</Link>*/}

            <Link className="btn-home" to="/passwordmaker"> Generateur de mot de passe </Link>

            <Link className="btn-home" to="/formulaire"> Formulaire </Link>
        </div>
    )
}

export default Home;