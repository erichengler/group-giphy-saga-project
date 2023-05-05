const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * from "favorite" ORDER BY "id" ASC;`;
  pool.query(queryText)
    .then(result => {
      console.log(`getting all fave gifs: ${result}`);
      res.send(result.rows)
    }).catch((error) => {
      console.log(`Error in GET favorite: ${error}`);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('In POST request');
  let queryText = `INSERT INTO "favorite" ("url")
    VALUES ($1)`
  pool.query(queryText, [req.body.url])
    .then((result) => { res.sendStatus(200) })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  const queryText = `UPDATE "favorite" set "category_id" = $1 
  where "id" = $2;`;
  pool.query(queryText, [ req.body.category_id, req.body.id ])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(`Error in PUT: ${error}`);
      res.sendStatus(500);
    })
  // req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
