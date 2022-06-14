import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pizza from "./components/Pizza";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes> 
        <Route  path="/" element={<Pizza/>}>
        </Route>
        <Route path="/checkout" element={<Checkout/>}>
        </Route >
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}
export default App;