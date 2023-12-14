import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/main/:id" element={<Main/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
