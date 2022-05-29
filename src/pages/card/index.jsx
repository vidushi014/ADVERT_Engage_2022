import React from "react";
import "./style.css";

import kebab from "../../assets/qiyab.png";

const Card = (props) => {
  const handleOpen = () => {
    props.setOpen(true);
    props.setItemData(props.item.Name);
  };



  return (
    <div className="cardMain" key={props.index} onClick={handleOpen}>
      <img className="cardImg" src={`https://img.youtube.com/vi/${props.item.Name}/hqdefault.jpg`} alt="adImg" />
      <div className="cardInfo">
        <p className="cardPara">{props.item.Topic}</p>
        <div class="dropdown">
          <img
            src={kebab}
            alt="menu-dots"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            className="kebabMenu"
          />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              About
            </a>
            <a class="dropdown-item" href="#">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
