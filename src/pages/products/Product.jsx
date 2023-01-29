import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <SideBar />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Product;
