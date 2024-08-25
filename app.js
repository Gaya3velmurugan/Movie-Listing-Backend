require("dotenv").config();
const movieRoutes = require("./routes/movies/moviesRoutes");
const movieWatches = require("./routes/movies/moviesWatches");
const  connection = require("./db/index");
const express = require("express");
const app = new express();
const port = process.env.PORT || 8080; 

connection();
app.use(express.json());
app.use("/movies", movieRoutes); 
app.use("/watches", movieWatches); 


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});





