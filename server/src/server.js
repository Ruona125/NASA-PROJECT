const http = require("http");

require("dotenv").config();
// const mongoose = require("mongoose");

const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");
const { mongoConnect } = require("./services/mongo");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();


