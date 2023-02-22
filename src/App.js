import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./home";
import QRimage from "./Qrimage";
import Form from "./Form";

const App = ()=>{

    return(
      <Routes>
      <Route path ='/' element = {<Home/>}></Route>
      <Route path ='/form' element = {<Form/>}></Route>
      <Route path ='/qr' element = {<QRimage/>}></Route>
      </Routes>
    )
}
export default App;