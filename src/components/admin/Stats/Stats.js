import React from "react";
import "./Stats.css";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  boxShadow: "none",
  backgroundColor: "transparent",
  display: "block",
  marginTop: "auto",
  marginBottom: "auto",
}));

// style={{ borderRadius: "10px", height:'100%', width:'100%' }}
const Stats = (props) => {
  return (
    <div className="StatsMain" onClick={props.clickHandler}>
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
          <Grid container spacing={2} alignItems="start">
            <Grid item xs={4}>
              <Item>
                <img
                  alt="stats"
                  src={`https://img.youtube.com/vi/${props.Name}/hqdefault.jpg`}
                  style={{
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    objectFit: "none",
                    aspectRatio: "19/10",
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <p className="StatsHeading">
                  {props.topic}{" "}
                </p>
                <p className="StatsPara" >
                  {props.subTopic}
                </p>
              </Item>
            </Grid>
            <Grid item xs={1}>
              <Item style={{display:"flex"}}>
                  <div>
                    <VisibilityIcon sx={{ color: "black"}} />
                  </div>
                  <div>
                    <p className="StatsPara" style={{ padding: "0", margin: "0",color:'black' }}> &nbsp; 18</p>
                  </div>
              </Item>
            </Grid>
            <Grid item xs={1}>
              <Item style={{display:"flex"}}>
                  <div>
                    <TouchAppIcon sx={{ color: "black" }} />
                  </div>
                  <div>
                    <p className="StatsPara" style={{ padding: "0", margin: "0",color:'black'  }}> &nbsp; 9</p>
                  </div>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <a
                href={`https://www.youtube.com/watch?v=${props.Name}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" , margin:"10px 0"}}
              >
                <button style={{border:"none", outline:"none" , margin:"10px 0" }}>View More</button>
              </a>
            </Item>
          </Grid>
      </Box>
    </div>
  );
}; /*  */

export default Stats;
