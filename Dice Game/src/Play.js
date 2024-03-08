import React from "react"
import Data from "./Data"
import Option from "./Option"
import Roll from "./Roll"
import "./css/style2.css"

export default function Play(){

    const [val , setval] = React.useState(0);

    const[die , setdie] = React.useState({
        id:1,
        img:Data[0].imgurl
    })

    const [score , setscore] = React.useState(0);

    function check(x){
      
        if(val===x){
            setscore(prev=>prev + val);
        }
        else{
            setscore(prev=> prev-2);
        }

        setval(prev=>0)
     
    }
    
    const[error , seterror] = React.useState(0)

    return (
        <div>

            <Option val={val} setval={setval} score={score} error={error} seterror={seterror}/>

            <Roll setval={setval} setscore = {setscore} val={val} die={die} setdie={setdie} check={check} error={error} seterror={seterror} />

            
   
    

      
        </div>
    )
}