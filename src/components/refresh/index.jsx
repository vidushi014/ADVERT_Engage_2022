import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Btn = styled(Button)({
  textTransform: "capitalize",
});

const Refresh = ({ setNavActive }) => {
  const navigate = useNavigate();
  return (
    <div className="refreshMain">
      <h1>You have successfully removed the user data!</h1>
      <Btn
        onClick={() => {
          navigate("/Home");
          navigate("/");
          setNavActive("Homepage");
        }}
      >
        Back to Home
      </Btn>
    </div>
  );
};
export default Refresh;
