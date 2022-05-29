import React, { useState, useEffect } from "react";
import "./style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import AdStats from "./AdStats/AdStats";
import Stats from "./Stats/Stats";
import { adStoreData } from "../../Record";
import { borderRadius } from "@mui/system";

const Btn = styled(Button)({
  textTransform: "capitalize",
});

const Admin = ({ setNavActive, userData }) => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [dropDownData, setDropDownData] = useState("");
  const [gender, setGender] = useState([]);
  const [adStat, setAdstat] = useState({
    topic: adStoreData[0].Topic,
    subTopic: adStoreData[0].Subtopic,
    Name: adStoreData[0].Name,
  });
  const [adData,setAdData] = useState([]);

  const onClickHandler = (item) => {
    setAdstat((prevState) => ({
      ...prevState,
      topic: item.Topic,
      subTopic: item.Subtopic,
      Name: item.Name,
    }));
  };
  
  useEffect(() => {
    const adData = adStoreData.filter((it) => {
      if (
        searchData === "" &&
        dropDownData !== "" &&
        gender.length > 0
      ) {
        for (let i = 0; i < it.Emotion.length; i++) {
          if (
            it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
          ) {
            if (it.Gender.length === 2 || it.Gender[0] === gender)
              return it;
          }
        }
      } else if (searchData === "" && dropDownData !== "") {
        for (let i = 0; i < it.Emotion.length; i++) {
          if (
            it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
          )
            return it;
        }
      } else if (
        searchData === "" &&
        dropDownData === "" &&
        gender !== ""
      ) {
        if (it.Gender.length == 2 || it.Gender[0] === gender) {
          return it;
        }
      } else if (searchData === "") {
        return it;
      } else if (
        it.Topic.toLowerCase().includes(searchData.toLowerCase()) &&
        dropDownData
      ) {
        for (let i = 0; i < it.Emotion.length; i++) {
          if (
            it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
          )
            return it;
        }
      } else if (
        it.Topic.toLowerCase().includes(searchData.toLowerCase())
      ) {
        return it;
      } else if (
        searchData === "" &&
        dropDownData !== "" &&
        gender !== ""
      ) {
        for (let i = 0; i < it.Emotion.length; i++) {
          if (
            it.Emotion[i].toLowerCase() ===
              dropDownData.toLowerCase() &&
            (it.Gender.length == 2 || it.Gender[0] === gender)
          ) {
            return it;
          }
        }
      }
      
    })

    setAdData(adData);
  }, [dropDownData,gender,searchData]);

  useEffect(() => {
    if(adData.length>0)setAdstat({topic:adData[0].Topic,subTopic:adData[0].Subtopic,Name:adData[0].Name});
  },[adData]);

  console.log("akash",userData);

  return (
    <div className="adminMain" style={{ display: "flex" }}>
      <div style={{ width: "58vw", padding: "1% 0 0 1%" }}>
        <div className="IntroBlock">
          <Btn
            startIcon={<ArrowBackIosIcon />}
            onClick={() => {
              navigate("/Home");
              setNavActive("Homepage");
            }}
          >
            Back to Home
          </Btn>
          <p className="Heading">Ad Review</p>
          <p className="Para">
            In this section you can see how well an ad performed, by checking
            out all the stats of that particular advertisement.
          </p>
        </div>
        <div className="search my-2" style={{ width: "100%" }}>
          <input
            style={{
              width: "30%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid black",
              margin: "0 10px",
              padding: "4px 10px",
            }}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchData(e.target.value)}
          />

          <select
            name="emotions"
            id="emotions"
            onChange={(e) => setDropDownData(e.target.value)}
            style={{
              width: "30%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid black",
              padding: "4px 10px",
              margin: "0 10px",
            }}
          >
            <option value="">Select Emotion</option>
            <option value="Anger">Anger</option>
            <option value="contempt">Contempt</option>
            <option value="disgust">Disgust</option>
            <option value="fear">Fear</option>
            <option value="happiness">Happiness</option>
            <option value="neutral">Neutral</option>
            <option value="Sadness">Sadness</option>
            <option value="Surprise">Surprise</option>
          </select>
          <select
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            style={{
              width: "30%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid black",
              padding: "4px 10px",
              margin: "0 10px",
            }}
          >
            <option value="">Choose Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="ScrollbarDiv" style={{ height: "64vh" }}>
          {adStoreData
            .filter((it) => {
              if (
                searchData === "" &&
                dropDownData !== "" &&
                gender.length > 0
              ) {
                for (let i = 0; i < it.Emotion.length; i++) {
                  if (
                    it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
                  ) {
                    if (it.Gender.length === 2 || it.Gender[0] === gender)
                      return it;
                  }
                }
              } else if (searchData === "" && dropDownData !== "") {
                for (let i = 0; i < it.Emotion.length; i++) {
                  if (
                    it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
                  )
                    return it;
                }
              } else if (
                searchData === "" &&
                dropDownData === "" &&
                gender !== ""
              ) {
                if (it.Gender.length == 2 || it.Gender[0] === gender) {
                  return it;
                }
              } else if (searchData === "") {
                return it;
              } else if (
                it.Topic.toLowerCase().includes(searchData.toLowerCase()) &&
                dropDownData
              ) {
                for (let i = 0; i < it.Emotion.length; i++) {
                  if (
                    it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
                  )
                    return it;
                }
              } else if (
                it.Topic.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return it;
              } else if (
                searchData === "" &&
                dropDownData !== "" &&
                gender !== ""
              ) {
                for (let i = 0; i < it.Emotion.length; i++) {
                  if (
                    it.Emotion[i].toLowerCase() ===
                      dropDownData.toLowerCase() &&
                    (it.Gender.length == 2 || it.Gender[0] === gender)
                  ) {
                    return it;
                  }
                }
              }
              
            })
            .map((item, index) => {
              return (
                <Stats
                  topic={item.Topic}
                  subTopic={item.Subtopic}
                  Name={item.Name}
                  clickHandler={() => onClickHandler(item)}
                />
              );
            })}
        </div>
      </div>
      <AdStats
        style={{ margin: "-20px 0 0 0" }}
        topic={adStat.topic}
        subTopic={adStat.subTopic}
        Name={adStat.Name}
      ></AdStats>
    </div>
  );
};

export default Admin;
