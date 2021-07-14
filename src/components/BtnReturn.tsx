import React from "react";
import { Link } from "react-router-dom";
import "./btnReturn.css"

const BtnReturn =()=> {
  return(
    <>
    <Link className="btn return" to="/">&#9754; Go Home</Link>
    </>
  )
}

export default BtnReturn;