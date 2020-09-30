const { Sequelize } = require("../models");
const db = require("../models");
const router = require("express").Router();

router.get("/quotes", (req, res) => {
    db.Quotes.findAll({})
      .then(function(dbQuotes) {
          res.json(dbQuotes);
      })
});

router.get("/random", (req, res) => {
    db.Quotes.findOne({ order: Sequelize.literal("rand()"), limit: 1 })
      .then((quotes) => {
          // need to return the single quote here
        //   res.json(dbQuotes);
      })
});

module.exports = router;
