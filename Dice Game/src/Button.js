import React from "react"

export default function Button(prop){
  
    return(
        <div>
             <button id="b"  onClick={()=>prop.handleclick(prop.id)}> {prop.id}</button>
        </div>
    )
}