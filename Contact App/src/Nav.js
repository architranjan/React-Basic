import React from "react";
import logo from "./img/logo.png"

export default function Nav(){
    return(
        <nav>
        <img id="logo" src={logo} alt="logo"></img>
        <h1>Firebase Contact App</h1>
     
        </nav>
    )
}
