import React from "react";
import logo from "./img/foodlogo.png"
import Button from "./Button"
import Food from "./Fooddata"

export default function Nav(prop){
  
    const data = [
        {
        id:1,
        text:"All",
        type:"all"
        },
        {
            id:2,
            text:"BreakFast",
            type:"breakfast"
            },    
     {
            id:3,
                text:"Lunch",
                type:"lunch"
                },

                {
                    id:4,
                    text:"Dinner",
                    type:"dinner"
                    },              

    ]

    const element = data.map((item)=>{
        return <Button id={item.id} text={item.text} type={item.type} click={SearchClick} />
        
    })
    
    function SearchClick(type){
        if(type==="all"){
            prop.setsearchdata(Food);
            return;
        }

        const filter = Food?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase())
        );
        prop.setsearchdata(filter);


    }
    function search(event){
        const searchitem = event.target.value
        if(searchitem===""){
          prop.setsearchdata(null);
        }

        const filter = Food?.filter((food)=>food.name.toLowerCase().includes(searchitem.toLowerCase())
        );
        prop.setsearchdata(filter);

  }
   

    return (
        <div id="navbar">
            <nav>
                <img id="logo" src={logo} alt="logo"></img>
                <input type="text" onChange={search} placeholder="Search Food...."></input>
            </nav>
            <div id="button">
            {element}
            </div>
            
            
        </div>
    )
}