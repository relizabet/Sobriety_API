require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(cors({
    credentials: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
const apiRoutes = require("./routes/api-routes")
app.use("/api", apiRoutes);

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});