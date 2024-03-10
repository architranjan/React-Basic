import React from "react";
import Nav from "./Nav"
import Search from "./Search"
import Contacts from "./Contacts"
import {collection , getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase"
import Box from "./Box"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import No from "./No"

export default function App(){



    const[contacts , setcontacts] = React.useState([]);

    React.useEffect(()=>{
        const getdata = async ()=>{
            try {
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
                   setcontacts(ContactList);

                   return ContactList;
                });
              
               
             
            }

            catch(error){
                console.log(error);
            }
            
        }

        getdata();
       
    } , []);


    const[data , setdata]=React.useState({
        Name:"",
        Email:"",
        Phone:"",
    
    }); 


    const [update , setupdate] = React.useState(false);

    const [id , setid] = React.useState(null);
    

    const element = contacts.map((item)=>{
        return (
           
            <Contacts setid={setid} data = {data} setdata={setdata} setupdate = {setupdate}click = {HandleClick}key = {item.id} phone={item.Phone} name={item.Name} email={item.Email} id={item.id}/>
        )
    })

    
    const[show , setshow] = React.useState(false);
    
    function HandleClick(){
        setshow(prev=>!prev);
    }

  

   

    return (
        <div id="container">
            
           <Nav />
           <Search setupdate={setupdate} click={HandleClick} contact={contacts} setcontact={setcontacts}   data = {data} setdata={setdata}/>
           {show ? <Box data = {data} setdata={setdata}click={HandleClick} update={update} id={id}/> : null};
           <div id = "contact-box">
            {contacts.length===0 ? <No /> : element}
           </div>

           <ToastContainer />
         
         

         
        </div>
        
    )
}