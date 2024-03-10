import React from "react";
import {addDoc, collection, updateDoc ,doc} from "firebase/firestore";
import {db} from "./config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Box(prop){

  
   
    function store(event){
             prop.setdata((prev)=>{
                return {
                    ...prev,
                    [event.target.name]:event.target.value
                }
             })
    }

 async function click(){
    if(prop.data.Name==="" || prop.data.Email==="" || prop.data.Phone===""){
        toast.error("Please Enter All the information")
        return;
    }
    if(!prop.update){
          try{
            const Ref = collection(db , "Contacts" );
            await addDoc(Ref , prop.data );
            prop.click();
            toast.success("Added Succesfully");
          }

          catch(error){
            console.log(error);
          }
         
    }

    else{
        try{
            const Ref =doc(db , "Contacts" , prop.id );
            await updateDoc(Ref , prop.data);
            prop.click();
            toast.success("Updated Succesfully");
          }

          catch(error){
            console.log(error);
          }
    }

   
}


    




    return (
        <div id="add-box">
           
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" name="Name" value={prop.data.Name} onChange={store}></input>
            <br/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" name="Email" value={prop.data.Email} onChange={store}></input>
            <br/>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Phone Number" name="Phone" value={prop.data.Phone} onChange={store}></input>
            
            <button id="save" onClick={()=>click()}>{!prop.update ? "Add Contact" : "Update Contact" }</button>
        </div>
    )
}