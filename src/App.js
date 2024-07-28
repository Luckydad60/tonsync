import React, { useState,useEffect } from "react"
import Home from "./components/Home";
import SeedForm from "./components/SeedForm";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Modal from "./components/Modal";



function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(false);
}, []);
  return (
    <Routes>
      <Route path="/" element={<Home  />}/>
      <Route path="/import" element={<SeedForm modal={modal} setModal={setModal} />} />
    </Routes>
  );
}

export default App;
