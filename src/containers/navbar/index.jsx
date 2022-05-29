import React, { useState } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import "./style.css";

import { WebcamComponent } from "../../components/webcam";

import homeSVG from "../../assets/home.svg";
import adminSVG from "../../assets/admin.svg";
import refreshSVG from "../../assets/refresh.svg";
import recordSVG from "../../assets/record.svg";
import dummyImg from "../../assets/dummy.png";

const Navbar = ({ active, setNavActive, setUserData }) => {
  const navigate = useNavigate();
  const navItems = [
    { key: "Homepage", icon: homeSVG, url: "/Home" },
    { key: "Admin Dashboard", icon: adminSVG, url: "/Admin" },
    { key: "Record", icon: recordSVG, url: "/Blog" },
    { key: "Refresh", icon: refreshSVG, url: "/Refresh" },
  ];

  const navClickHandler = (item) => {
    if(item.key==="Refresh"){
      navigate("/Refresh")
      setNavActive("Refresh")
      setUserData([]);
      return;
    }
    navigate(item.url);
    setNavActive(item.key);
  };

  return (
    <div className="navMain">
      <ul className="navList">
        {navItems.map((item, index) => (
          <li
            className={active === item.key ? "listItem-active" : "listItem"}
            key={item.key}
            onClick={() => navClickHandler(item)}
          >
            <img
              className={item.key === "Record" ? "navImg" : "navImg1"}
              src={item.icon}
              alt={item.key}
            />
          </li>
        ))}
      </ul>

      <div className="userImgMain">
        <img className="userImg" src={dummyImg} />
      </div>
    </div>
  );
};

export default Navbar;
