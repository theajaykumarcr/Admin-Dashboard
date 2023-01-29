import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Setting = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Setting</h1>
        </Box>
      </Box>
    </>
  );
};

export default Setting;
