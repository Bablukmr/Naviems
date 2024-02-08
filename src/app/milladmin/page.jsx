"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!header) {
      newErrors.header = true;
    }
    if (!title) {
      newErrors.title = "Title is required";
    }
    if (!file) {
      newErrors.file = "File is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append("header", header);
        formData.append("title", title);
        formData.append("file", file);

        console.log(header,title,file);

        const response = await axios.post("http://localhost:5000/upload-files", formData,{
          headers:{"Content-Type":"multipart/form-data"}
        });
        
        console.log("API response:", response.data);

        setHeader("");
        setTitle("");
        setFile(null);
        setErrors({});
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("API error:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "11" && password === "11") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

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

  return (
    <div className="mt-[100px] mb-[60px] w-full h-full flex items-center justify-center flex-col">
      <h1 className="my-10">Admin Submit Data</h1>
      <form
        className="flex items-center justify-center flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Header Types</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value={header}
            label="Header Types"
            onChange={(e)=>setHeader(e.target.value)}
            error={!!errors.header}
          >
            <MenuItem value="">Select Header</MenuItem>
            <MenuItem value="Suger">Suger</MenuItem>
            <MenuItem value="Distillery">Distillery</MenuItem>
          </Select>
          {errors.header && (
            <span className="text-red-500">Header is required</span>
          )}
        </FormControl>
        <TextField
          type="text"
          id="title"
          label="Title"
          variant="outlined"
          className="w-[300px]"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          error={!!errors.title}
        />
        {errors.title && <span className="text-red-500">{errors.title}</span>}
        <TextField
          id="file"
          type="file"
          variant="outlined"
          className="w-[300px]"
          onChange={handleFileChange}
          error={!!errors.file}
        />
        {errors.file && <span className="text-red-500">{errors.file}</span>}
        <Button
          type="submit"
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
