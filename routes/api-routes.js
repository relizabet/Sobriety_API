const { Sequelize } = require("../models");
const db = require("../models");
const router = require("express").Router();

// get all quotes
router.get("/quotes", (req, res) => {
    db.Quotes.findAll({})
      .then(dbQuotes => {
          res.json(dbQuotes);
      })
      .catch(err => {
        res.status(400).json(err);
    })
});

// get single random quote
router.get("/random", (req, res) => {
    db.Quotes.findOne({ order: Sequelize.literal("rand()"), limit: 1 })
        .then(dbQuotes => {
            res.json(dbQuotes);
            res.status(200);
    })
      .catch(err => {
          res.status(400).json(err);
      })
});

// post quote for review
router.post("/add-quote", (req, res) => {
    db.Submit.create({
        quote: req.body.quote,
        author: req.body.author,
        source: req.body.source,
        category: req.body.category
    })
      .then(dbSubmit => {
          res.json(dbSubmit);
          res.status(201);
      })
        .catch(err => {
          res.status(400).json(err);
        });
});

module.exports = router;