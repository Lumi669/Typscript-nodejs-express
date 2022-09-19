import express from "express";

//const express = require('express')

const app = express();

app.get("/", (req, res) => {
  res.send("I don't want to get anything from home page. ");
});

app.listen(3000);
