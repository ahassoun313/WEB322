/********************************************************************************
* WEB322 – Assignment 02
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
*
* Name: Ali Hassoun  Student ID: 103519237 Date: 1/2/2024
*
* Published URL: https://clear-pink-pig.cyclic.app

********************************************************************************/
const express = require("express");
const legoData = require("./modules/legoSets");
const themeData = require("./data/themeData");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Assignment 2: Ali Hassoun - 103519237");
});

app.get("/lego/sets", async (req, res) => {
  try {
    await legoData.initialize();
    const allSets = await legoData.getAllSets();
    res.json(allSets);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/lego/sets/num-demo", async (req, res) => {
  try {
    await legoData.initialize();
    const specificSet = await legoData.getSetByNum("001-1");
    res.json(specificSet);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/lego/sets/theme-demo", async (req, res) => {
  try {
    await legoData.initialize();
    const setsByTheme = await legoData.getSetsByTheme("tech");
    res.json(setsByTheme);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});