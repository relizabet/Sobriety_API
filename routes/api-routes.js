const { Sequelize } = require("../models");
const db = require("../models");
const router = require("express").Router();

router.get("/quotes", (req, res) => {
    db.Quotes.findAll({})
      .then(dbQuotes => {
          res.json(dbQuotes);
      })
});

router.get("/random", (req, res) => {
    db.Quotes.findOne({ order: Sequelize.literal("rand()"), limit: 1 })
      .then(dbQuotes => {
          res.json(dbQuotes);
      })
});

// router.post("/add-quote", (req, res) => {

// })

module.exports = router;
