import React from "react"
import Play from "./Play"
import FrontPage from "./FrontPage"
import { BrowserRouter , Route,Routes } from 'react-router-dom';

export default function App(){

    return(
        <BrowserRouter>
           <Routes>
            <Route path="/" element= {<FrontPage />}  />
            <Route path="/play" element ={<Play />} />
           </Routes>
        </BrowserRouter>
       
       
    )
}