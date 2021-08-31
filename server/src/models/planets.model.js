const parse = require("csv-parse");
const fs = require("fs");

const habitablePlantes = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}; //this function will filter out those plantes which are habitable

fs.createReadStream("kepler_data.csv") //this enable us to open up a readable stream
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlantes.push(data);
    }
  }) //this is used to read file
  .on("err", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(
      habitablePlantes.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log(`${habitablePlantes.length} habitable plantes found`);
  });

module.exports = {
  planets: habitablePlantes,
};
