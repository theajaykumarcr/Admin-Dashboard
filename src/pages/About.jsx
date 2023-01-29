import React from "react";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import ProductList from "./products/ProductList";

const About = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductList />
        </Box>
      </Box>
    </>
  );
};

export default About;
