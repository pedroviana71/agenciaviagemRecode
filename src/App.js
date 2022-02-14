import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Destinos from "./Components/Destinos"
import Promocoes from "./Components/Promocoes"
import Contato from "./Components/Contato"
import Error from "./Components/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}> 
          <Route path="/" element={<Home/>}/>
          <Route path="destinos" element={<Destinos/>}/>
          <Route path="promocoes" element={<Promocoes/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>      

      </Routes>
    
    </BrowserRouter>
  )
    
}

export default App;
