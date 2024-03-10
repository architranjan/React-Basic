import React from "react";
import add from "./img/add.png"
import icon from "./img/icon.png"
import {collection , getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase"



export default function Search(prop){

   
    function search(event){
            const key = event.target.value;

            const Ref = collection(db , "Contacts" );
             
                // const Ref2 = await getDocs(Ref);

                onSnapshot(Ref ,(snapshot)=> {
                    const ContactList = snapshot.docs.map((doc)=>{
                        return {
                            ...doc.data(),
                            id:doc.id
                        };
                    });
                //   console.log(ContactList);

                const filter = ContactList?.filter((item)=>item.Name.toLowerCase().includes(key.toLowerCase()));
                prop.setcontact(filter);

               

                   return filter;
                });
    

    }

    function click(){
        prop.click();
        prop.setupdate(prev=>false);

        prop.setdata((prev)=>{
            return {
                ...prev,
                Name:"",
                Email:"",
                Phone:"",
             
            };
        });


    }
    return (
        <div id="search">
            <div id="input-box">
                <img src={icon} alt="icon"></img>
                <input type="text" placeholder="Search Contact" onChange={search}></input>
            </div>
           
            <img src={add} alt="add" onClick={click}></img>
  
        </div>
    )
}