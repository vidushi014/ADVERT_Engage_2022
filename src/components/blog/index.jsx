import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { adStoreData } from "../../Record";

import blogHero from "../../assets/blogHero.jpg";

import "./styles.css";

export const Blog = ({ setNavActive, userData }) => {
  const Btn = styled(Button)({
    textTransform: "capitalize",
  });
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState("");
  const [dropDownData, setDropDownData] = useState("");
  const [gender, setGender] = useState([]);
  const [adData, setAdData] = useState([]);

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      let emotion = "";
      let val = 0;
      for (const key in userData.faceAttributes.emotion) {
        if (userData.faceAttributes.emotion[key] * 100 > val) {
          val = userData.faceAttributes.emotion[key] * 100;
          emotion = key;
        }
      }
      setDropDownData(emotion);
      setGender(userData.faceAttributes.gender);
    }
  }, []);

  return (
    <div className="container blogPage">
      <div className="navbarBlog">
        <div className="leftNav">
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/Home");
              navigate("/");
              setNavActive("Homepage");
            }}
          >
            <ArrowBackIosIcon />
            <p>Back to Home</p>
          </div>
          {/* <div>Popular</div> */}
        </div>
        <div className="midNav">GEGIME</div>
        <div className="rightNav">
          <div className="me-3">
            {" "}
            <LibraryAddIcon className="hidden" />{" "}
            <span className="visible me-3"> Collections </span>
          </div>
          <div className="me-3">
            {" "}
            <ShoppingCartIcon className="hidden" />
            <span className="visible me-3"> My Cart </span>
          </div>
          <div>
            <AssignmentIndIcon className="hidden" />{" "}
            <span className="visible">My Account </span>
          </div>
        </div>
      </div>
      <div className="search my-2" style={{ width: "100%", display: "none" }}>
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
      <br />
      <div className="blogContent">
        <div className="blogDate">11:23 PM, 14 JANUARY</div>
        <div className="blogHeading">
          The serene beauty of Fuvahmulah Maldives
        </div>
        <div className="blogHero">
          <img src={blogHero} alt="Beautiful Beach at Fuvahmulah Maldives" />
        </div>
        <div className="blogArticle">
          <p>
            What makes the tropical paradise Maldives beautiful? The people, the
            crystal clear waters and the mesmerizingly beautiful islands makes
            the Maldives beautiful than it truly is. The islands of the Maldives
            gives you the best Maldivian experience and is the perfect tropical
            paradise for you. Fuvahmulah Maldives is one of the most unique
            islands of the Maldives, which is a city and an atoll as well.
          </p>
          <p>
            {" "}
            Under the Gnaviyani Atoll, Fuvahlumah Maldives leaves the ones who
            visit there in awe. This unique island has a separate dialect which
            is definitely going to amaze you because of the beautiful tone and
            words and if you are planning to visit Fuvahmulah, here is
            everything you need to know before planning your visit to Fuvahmulah
            Maldives.
          </p>
        </div>
        <div className="blogAdSection">
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
              if (index < 1)
                return (
                  <div style={{ display: "flex", flexDirection: "row",justifyContent:'center',marginTop:'16px',marginBottom:'16px' }}>
                    <iframe
                      width="80%"
                      height="500px"
                      src={`https://www.youtube.com/embed/${item.Name}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                );
            })}
        </div>
        <div className="blogArticle">
          <p>
            What makes the tropical paradise Maldives beautiful? The people, the
            crystal clear waters and the mesmerizingly beautiful islands makes
            the Maldives beautiful than it truly is. The islands of the Maldives
            gives you the best Maldivian experience and is the perfect tropical
            paradise for you. Fuvahmulah Maldives is one of the most unique
            islands of the Maldives, which is a city and an atoll as well.
          </p>
          <p>
            {" "}
            Under the Gnaviyani Atoll, Fuvahlumah Maldives leaves the ones who
            visit there in awe. This unique island has a separate dialect which
            is definitely going to amaze you because of the beautiful tone and
            words and if you are planning to visit Fuvahmulah, here is
            everything you need to know before planning your visit to Fuvahmulah
            Maldives.
          </p>
        </div>
        <div className="blogArticle">
          <p>
            What makes the tropical paradise Maldives beautiful? The people, the
            crystal clear waters and the mesmerizingly beautiful islands makes
            the Maldives beautiful than it truly is. The islands of the Maldives
            gives you the best Maldivian experience and is the perfect tropical
            paradise for you. Fuvahmulah Maldives is one of the most unique
            islands of the Maldives, which is a city and an atoll as well.
          </p>
          <p>
            {" "}
            Under the Gnaviyani Atoll, Fuvahlumah Maldives leaves the ones who
            visit there in awe. This unique island has a separate dialect which
            is definitely going to amaze you because of the beautiful tone and
            words and if you are planning to visit Fuvahmulah, here is
            everything you need to know before planning your visit to Fuvahmulah
            Maldives.
          </p>
        </div>
        <div className="blogAdSection">
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
              if (index > 1 && index<3)
                return (
                  <div style={{ display: "flex", flexDirection: "row",justifyContent:'center',marginTop:'16px',marginBottom:'16px' }}>
                    <iframe
                      width="80%"
                      height="500px"
                      src={`https://www.youtube.com/embed/${item.Name}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                );
            })}
        </div>
        <div className="blogArticle">
          <p>
            What makes the tropical paradise Maldives beautiful? The people, the
            crystal clear waters and the mesmerizingly beautiful islands makes
            the Maldives beautiful than it truly is. The islands of the Maldives
            gives you the best Maldivian experience and is the perfect tropical
            paradise for you. Fuvahmulah Maldives is one of the most unique
            islands of the Maldives, which is a city and an atoll as well.
          </p>
          <p>
            {" "}
            Under the Gnaviyani Atoll, Fuvahlumah Maldives leaves the ones who
            visit there in awe. This unique island has a separate dialect which
            is definitely going to amaze you because of the beautiful tone and
            words and if you are planning to visit Fuvahmulah, here is
            everything you need to know before planning your visit to Fuvahmulah
            Maldives.
          </p>
        </div>
        <br />
        <br />
        <br />

        <div className="blogFooter">
          <div className="leftFooter">
            <div>
              <h5>Our Products</h5>
            </div>
            <div>Newsletter</div>
            <div>Magazine</div>
          </div>
          <div className="rightFooter">
            <div>
              <h5>Contact Us</h5>
            </div>
            <div>+91 XXXXXXX123</div>
            <div>Pune, India</div>
          </div>
        </div>
      </div>
    </div>
  );
};
