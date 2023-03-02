import { Box, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";

const Setting = () => {
  const [value, setValue] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  let dataFetching = async () => {
    let item = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(item.data);
    setValue(item.data);
  };

  useEffect(() => {
    dataFetching();
  }, []);

  // let a = value.filter((person) => person.id > 0);
  // console.log(a.name, "test");
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={value}
            getOptionLabel={(value) => value.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>
      </Box>
    </>
  );
};

export default Setting;
