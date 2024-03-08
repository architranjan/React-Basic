import React from "react"
import Button from "./Button"


export default function Option(prop){
    const num = [1,2,3,4,5,6];

  

    const element = num.map((item)=>{
        return <Button id={item} handleclick={store}/>
        
    })

    function store(id){
        prop.setval(prev=>id)
        prop.seterror(prev=>0)
    }

 

    

    return(
        <nav>
            <div id="topbar">
                <div id="score-container">
                <p id="score">{prop.score}</p>
                 <p id="text">Total score</p>
                </div>
                
                <div id="side">
                <div id="guess-button">
                    {element}
                 

                    </div>
                    <p>Select Number</p>

                </div>
               
    
               
                    </div>
        
    
           
               
            

           
  
        </nav>
        
    )
}