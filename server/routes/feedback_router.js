const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    // console.log(req.body);
    // res.sendStatus(200);
    
    let queryText = `insert into "feedback" ("feeling", "understanding", "support", "comments")
    values ($1, $2, $3, $4);`;

    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST request', error);
        res.sendStatus(500);
    });
});

module.exports = router;