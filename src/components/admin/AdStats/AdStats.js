import React from "react";
import Advertisement from "../../../assets/Advertisement.png";
import "./AdStats.css"

const AdStats = (props) => {
  return (
    <div style={{ height: "100vh", width: "28vw", backgroundColor: "#fff" }}>
      <div>
        <img
          alt="ad"
          src={`https://img.youtube.com/vi/${props.Name}/hqdefault.jpg`}
          style={{
            width: "103%",
            position: "relative",
            top: "-10px",
            opacity: "0.6",
          }}
        ></img>
      </div>
      <div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "34px",
            margin: "15px 20px 0 20px",
          }}
        >
          {props.topic}{" "}
        </p>
        <p
          style={{
            fontWeight: "500",
            fontSize: "22px",
            margin: "15px 20px 0 20px",
          }}
        >
          {props.subTopic}
        </p>
      </div>
    </div>
  );
};

export default AdStats;
