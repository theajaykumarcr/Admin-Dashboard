/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SideBar from "../components/SideBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddCardIcon from "@mui/icons-material/AddCard";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideBar />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div>
                        <AddCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div>
                        <AddCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        $900.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;

// .gradient{
//   background: rgb(40, green, blue);
//   background: linear-gradient(158deg,rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%);
// }
// .gradientlight{
//   background: rgb(53,138, 148);
//   background: linear-gradient(158deg,rgba(53,138,148,1) 0%, rgba(91,180,96,1) 100%);
// }

// .bgcolor {
//   min-height: 100vh;
//   background: #ECEFF1;
//   background: linear-gradient(158deg,rgb(224,224,224) 0%, rrgb(233,237,254) 100%);
// }
