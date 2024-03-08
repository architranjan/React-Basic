import React from "react"
import Nav from "./Nav"
import Card from "./Card"
import Food from "./Fooddata"


export default function App(){

    const[searchdata , setsearchdata] = React.useState(Food);

    function search(event){
          const searchitem = event.target.value
          if(searchitem===""){
            setsearchdata(null);
          }

          const filter = Food?.filter((food)=>food.name.toLowerCase().includes(searchitem.toLowerCase())
          );
          setsearchdata(filter);

    }

    const element = searchdata.map((item)=>{
        return <Card image={item.image} name={item.name} price={item.price}  text={item.text} type={item.type}/>
        
    })
   
   


    return(
        <div id="container">
             <Nav searchdata={searchdata} setsearchdata={setsearchdata}/> 
             <div id="card-box">
             {element}
             </div>
        
          
        </div>
        
    )
}