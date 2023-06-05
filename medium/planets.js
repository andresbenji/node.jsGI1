const fs = require("fs");

fs.readFile("planets.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err.message);
    return;
  }

  const planets = data.split(",").map((planet) => planet.trim());
  console.log(planets);
});
