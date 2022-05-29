import React, { useState , useEffect} from "react";
import "./style.css";

import Card from "../../pages/card/index.jsx";
import AdModal from "../adModal/index.jsx";
import { WebcamCapture } from '../webcam/index';
import dummyAd1 from "../../assets/dummyAd1.png";
import dummyAd2 from "../../assets/dummyAd2.png";
import { adStoreData } from "../../Record";

const AdsDashboard = ({userData, setUserData}) => {
  const [open, setOpen] = useState(false);
  const [itemData,setItemData] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [dropDownData, setDropDownData] = useState("");
  const [gender, setGender] = useState([]);
  const [adStat, setAdstat] = useState({
    topic: adStoreData[0].Topic,
    subTopic: adStoreData[0].Subtopic,
    Name: adStoreData[0].Name,
  });
  const [userModal,setUserModal] = useState(userData.length==0 ? true : false);


  useEffect(() => {}, [dropDownData]);
  // setDropDownData()
  const onClickHandler = (item) => {
    console.log(item);
    setAdstat((prevState) => ({
      ...prevState,
      topic: item.Topic,
      subTopic: item.Subtopic,
      Name: item.Name,
    }));
  };

  useEffect(() => {
    if(userModal===false && Object.keys(userData).length>0){
      let emotion="";
      let val=0;
      for(const key in userData.faceAttributes.emotion){
        if(userData.faceAttributes.emotion[key]*100>(val)){
          val=userData.faceAttributes.emotion[key]*100;
          emotion=key;
        }
      }
      setDropDownData(emotion)
      setGender(userData.faceAttributes.gender);
    }
  },[userModal])

 
    // const emotion
    // const maxEmotion = Math.max(...emotion);
  return (
    
    <div className="adsDashMain">
      <div className="adsInfoMain">
        <h1 className="adsMainHead">Dashboard</h1>
        <p className="adsMainPara">
          Welcome Back! Here are all your recommended ads. Hovering on them to
          will show a small preview of the ad. Click on them to watch them on
          fullscreen.
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
            <option value="">{dropDownData}</option>
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
            <option value="">{gender}</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
      <div className="adsContainer">
        {adStoreData .filter((it) => {
              if (searchData === "" && dropDownData !== "" && gender.length>0) {
                for (let i = 0; i < it.Emotion.length; i++) {
                  if (
                    it.Emotion[i].toLowerCase() === dropDownData.toLowerCase()
                  ) {
                    if(it.Gender.length === 2 || it.Gender[0] === gender)return it;
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
            }).map((item, index) => (
            <Card item={item} index={index} setItemData={setItemData} setOpen={setOpen} />
        ))}
        <AdModal open={open} setOpen={setOpen} itemName={itemData} />
        <WebcamCapture open={userModal} setOpen={setUserModal} userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default AdsDashboard;
