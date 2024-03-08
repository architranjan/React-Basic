import React from "react"
import dice from "./img/dice.png"
import {Link} from "react-router-dom"
import "./css/style1.css"


export default function FrontPage(){
    return (
        <div id="container">
        <div id="front">
        <img id="dice-img" src={dice} alt=""></img>
        <div id="heading">
          <div>
          <h1 >DICE GAME</h1>
          <Link to="/play">
          <button id="play-btn">Play Now</button>
          </Link>
         
          </div>
         
        </div>
      </div>
      </div>
    )
}
