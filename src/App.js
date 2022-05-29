import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./containers/navbar/index";
import Admin from "./components/admin/index";
import AdsDashboard from "./components/adsDashboard/index";
// import { WebcamCapture } from "./components/webcam";
import { Blog } from "./components/blog/index";
import Login from "./components/login/index";

function App() {
  const [navActive,setNavActive] = useState("Homepage");
  const [userData,setUserData] = useState([]);

  return (
    <div style={{ width: "100%", boxSizing: "border-box"}}>
      <BrowserRouter>
        <Routes >
          <Route path="/Admin" element={<><Admin userData={userData} setUserData={setUserData} setNavActive={setNavActive}/><Navbar active={navActive}  setNavActive={setNavActive}/></>} />
          <Route path="/Home" element={<><AdsDashboard userData={userData} setUserData={setUserData} /><Navbar  active={navActive}  setNavActive={setNavActive}/></>} />
          <Route path="/Refresh" element={<><Login userData={userData} setUserData={setUserData}/><Navbar active={navActive}  setNavActive={setNavActive}/></>} />
          <Route path="/Blog" element={<Blog userData={userData} setNavActive={setNavActive}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;