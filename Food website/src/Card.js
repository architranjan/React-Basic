import React from "react"




export default function Card(prop){
   
    return (
        <div id="card">
           <img src={require(`${prop.image}`)}></img>
           <div id="content">
            <h1>{prop.name}</h1>
            <p>{prop.text}</p>
           </div>
           <button>{`$${prop.price}.00`}</button>
        </div>
    )
}