import React from "react";
import user from "./img/user.png"
import dustbin from "./img/dustbin.png"
import edit from "./img/edit.png"
import {collection , deleteDoc , doc} from "firebase/firestore";
import {db} from "./config/firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contacts(prop){

   async function deletedata(id){
       try{
        const Ref = collection(db , "Contacts");
        await deleteDoc(doc(Ref , id));
        toast.success("Deleted Succesfully");
       }
       catch(error){
        console.log(error);
       }


   }

   function click(){
    prop.setupdate(prev=>true);
    prop.click();

    prop.setid(prev=>prop.id);

    prop.setdata((prev)=>{
        return {
            ...prev,
            Name:prop.name,
            Email:prop.email,
            Phone:prop.phone,
         
        };
    });

//
 
   }

    return(
        <div id="contact">
            <img id="user"src={user} alt="user"></img>
            <div id="info">
            <p id="p1">{prop.name}</p>
            <p id="p2">{prop.email}</p>
            <p id="p3">{prop.phone}</p>
            </div>
            <div id="button">
            <img id="edit"src={edit} alt="edit" onClick={()=>click(prop.id)}></img>
            <img id="dustbin"src={dustbin} onClick={()=>deletedata(prop.id)}></img>
            </div>
           
        </div>
    )
}