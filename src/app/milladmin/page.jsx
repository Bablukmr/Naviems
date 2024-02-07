"use client"
import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Admin() {
  // State variables for email, password, and authentication status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the entered email and password match the predefined values
    if (email === "bablu@gmail.com" && password === "bablu@1234") {
      setIsLoggedIn(true); // Set isLoggedIn to true if credentials are correct
    } else {
      alert("Invalid email or password"); // Show an alert if credentials are incorrect
    }
  };

  // If user is not logged in, display login form
  if (!isLoggedIn) {
    return (
      <div className="mt-[100px] mb-[60px] w-full h-full  flex items-center justify-center flex-col">
        <h1 className="my-10">Login</h1>
        <form className="flex items-center justify-center flex-col gap-4">
          <TextField
            type="email"
            id="Email"
            label="Email"
            variant="outlined"
            className="w-[300px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            className="w-[300px]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            variant="contained"
            className="w-[300px] py-3 bg-blue-700 text-white rounded-md"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }

  // If user is logged in, display admin panel
  return (
    <div className="mt-[100px] mb-[60px] w-full h-full  flex items-center justify-center flex-col">
      <h1 className="my-10">Admin Submit Data</h1>
      <form className="flex items-center justify-center flex-col gap-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          id="NAme"
          label="Name"
          variant="outlined"
          className="w-[300px]"
        />
        <TextField
          id="Email"
          type="file"
          variant="outlined"
          className="w-[300px]"
        />
        <Button
          variant="contained"
          className="w-[300px] py-3 bg-blue-700 text-white rounded-md"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Admin;
