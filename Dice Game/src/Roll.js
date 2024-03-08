import React from "react"
import Data from "./Data"



export default function Roll(prop){
  
    

    
    function Handleclick(){
       
        if(prop.val!=0){
        const x = Math.floor(Math.random() * Data.length)
        prop.setdie(prev=>{
            return {
                ...prev,
                id:Data[x].id,
                img:Data[x].imgurl

            }
            
        });
        
        prop.check(x+1);
    }

    else{
        prop.seterror(prev=>!prev)
    }
    }

  
        

        

        
    

    

   

    const[show , setshow] = React.useState(false)

    function rule(){
            setshow((prev)=>!prev);
    }


    function reset(){
        prop.setscore(prev=>0);
        prop.setval(prev=>0);
        prop.seterror(prev=>0);
        prop.setdie((prev)=>{
            return{
                ...prev,
                id:1,
                img:Data[0].imgurl
            }
        })
    }

  return (
   <div id="box">
 <div id="die-box">
        <img id="die" src={require(`${prop.die.img}`)} alt="die"  onClick={Handleclick}></img>
        <p>Click on Dice to roll</p>
        <p id="red">{prop.error ? "Error , Please Select a number" : null}</p>
        <button id="btn" onClick={reset}>Reset Score</button>
        <button id="btn" onClick={rule}>Show Rule</button>
    </div>
    { show ? 
    <div id="rule">
        <h1>How to play dice game</h1>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </div>

    :null
}
   </div>


    

  
  
   

  )
}