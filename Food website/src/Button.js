import React from "react"

export default function Button(prop){
    return(
        <div>
            <button id={`b${prop.id}`}  onClick={()=>prop.click(prop.type)}>{prop.text}</button>
        </div>
    )
}