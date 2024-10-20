import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Vector from "../images/Vector.png";
import Girl from "../images/Group 6695.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import speaker from "../images/speaker.jpg"
import airpod from "../images/airpod.jpg"
import powerbank from "../images/PowerBank.jpg"
import headphone from "../images/headphone.jpg"
import camera from "../images/wifi camera.jpg"

function LandingPage() {
  const data = [
    {
      name: "Sony Blackheadphones",
      minBid: "$100",
      curBid: "$157",
      endin: "1 day 12hrs 43 mins",
      img:headphone
    },
    {
      name: "Apple Airpod 2nd Gen",
      minBid: "$80",
      curBid: "$95",
      endin: "1 day 12hrs 43 mins",
      img:airpod

    },
    {
      name: "Mi 3i 20000mh Power Bank",
      minBid: "$40",
      curBid: "$46",
      endin: "1 day 12hrs 43 mins",
      img:powerbank

    },
    {
      name: "TriBit Bluetooth Speaker",
      minBid: "$10",
      curBid: "$15",
      endin: "1 day 12hrs 43 mins",
      img:speaker

    },
    {
      name: "Home Camera",
      minBid: "$100",
      curBid: "$157",
      endin: "1 day 12hrs 43 mins",
      img:camera

    },
    {
      name: "Wifi Security Camera",
      minBid: "$140",
      curBid: "$172",
      endin: "1 day 12hrs 43 mins",
      img:camera

    },
    {
        name: "Apple Airpod 2nd Gen",
        minBid: "$80",
        curBid: "$95",
        endin: "1 day 12hrs 43 mins",
        img:airpod
  
      },
      {
        name: "Mi 3i 20000mh Power Bank",
        minBid: "$40",
        curBid: "$46",
        endin: "1 day 12hrs 43 mins",
        img:powerbank
  
      },
    {
        name: "Sony Blackheadphones",
        minBid: "$100",
        curBid: "$157",
        endin: "1 day 12hrs 43 mins",
        img:headphone
      },
      {
        name: "Apple Airpod 2nd Gen",
        minBid: "$80",
        curBid: "$95",
        endin: "1 day 12hrs 43 mins",
        img:airpod
  
      },
      {
        name: "Mi 3i 20000mh Power Bank",
        minBid: "$40",
        curBid: "$46",
        endin: "1 day 12hrs 43 mins",
        img:powerbank
  
      },
      {
        name: "TriBit Bluetooth Speaker",
        minBid: "$10",
        curBid: "$15",
        endin: "1 day 12hrs 43 mins",
        img:speaker
  
      },
    
   
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ "background-color": "#e8bcbc" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={Vector} style={{ "margin-left": "66px" }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mr: 70, color: "black" }}
            style={{ "margin-left": "-20px" }}
          >
            Genix Auctions
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "black" }}>
            Auctions
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "black" }}>
            Bidding
          </Typography>{" "}
          <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "black" }}>
            About us
          </Typography>{" "}
          <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "black" }}>
            English
          </Typography>{" "}
          <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "blue" }}>
            Login
          </Typography>
          <Button variant="contained">Get Started</Button>
        </Toolbar>
      </AppBar>

      <img src={Girl} />
<Grid container style={{"justify-content":"center",display:"flex","align-items":"center"}} >
      {data.map((x)=>(
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} >

           <Card sx={{width:"300px",height:"340px"}}>
           <CardMedia
             sx={{ height: 140 }}
             image={x.img}
            // title="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="subtitle2" component="div" sx={{"font-size":"large"}}>
               {x.name}
             </Typography>
             <Typography gutterBottom variant="subtitle2" component="div">
              Minimum Bid: {x.minBid}
             </Typography>
             <Typography gutterBottom variant="subtitle2" component="div">
              Current Bid: {x.curBid}
             </Typography>
             <Typography gutterBottom variant="subtitle2" component="div">
               Ends in: {x.endin}
             </Typography>
           </CardContent>
           <CardActions style={{"justify-content":"center"}}>
             <Button style={{ "background-color": "dodger-blue  " }}variant="contained"  size="medium">Bid now</Button>
           </CardActions>
           {""}
         </Card>
         </Grid>
      ))}
      </Grid>

    </Box>
  );
}

export default LandingPage;
