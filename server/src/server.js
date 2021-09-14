const http = require("http");

// const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");
const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// await mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true,
//   // useFindAndModify: false,
//   // useCreateIndex: true,
//   useUnifiedTopology: true,
// });

async function startServer() {
  // await mongoose.connect(MONGO_URL, {
  //   useNewUrlParser: true,
  //   // useFindAndModify: false,
  //   // useCreateIndex: true,
  //   useUnifiedTopology: true,
  // });

  // await mongoose.connect(MONGO_URL);
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();

// console.log(PORT);
