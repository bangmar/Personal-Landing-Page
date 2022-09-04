import React from "react";
import Landing from "./components/LandingPage/Landing";
import CV from "./components/CV/CV";
import { BrowserRouter, Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/cv' element={<CV/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
