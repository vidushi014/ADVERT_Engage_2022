import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import blogHero from "../../assets/blogHero.jpg";

import "./styles.css";

export const Blog = ({ setNavActive, userData }) => {
  const Btn = styled(Button)({
    textTransform: "capitalize",
  });
  const navigate = useNavigate();
  console.log("akash",userData);
  return (
    <div className="container blogPage">
      <div className="navbarBlog">
        <div className="leftNav">
          <div
            className="d-flex flex-row align-items-center"
            style={{cursor:'pointer'}}
            onClick={() => {
              navigate("/Home");
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
          <div className="me-3"> <LibraryAddIcon className="hidden"/> <span className="visible me-3"> Collections </span></div>
          <div className="me-3"> <ShoppingCartIcon className="hidden"/><span className="visible me-3"> My Cart </span></div>
          <div><AssignmentIndIcon className="hidden"/> <span className="visible">My Account </span></div>
        </div>
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
        <div className="blogAdSection"></div>
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
        <div className="blogAdSection"></div>
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
