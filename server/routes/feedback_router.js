// This is the feedback_router file for the Week 11 assignment for Prime Digital Academy, created by 
// Adam Boerhave, 10/30/2020 - 11/1/2020

// require and define express
const express = require('express');
const router = express.Router();

// required
const pool = require('../modules/pool');

// post route for sending object of feeling, understanding, and support values,
// as well as comments to the db
router.post('/', (req, res) => {
    
    let queryText = `insert into "feedback" ("feeling", "understanding", "support", "comments")
    values ($1, $2, $3, $4);`;

    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST request', error);
        res.sendStatus(500);
    });
});

// get route to get previous entries from database and display in Admin component
router.get('/', (req, res) => {
    let queryText = `select * from feedback order by id desc;`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get feedback request', error);     
    });
});

// delete route to delete feedback entry at req.params.id
router.delete('/:id', (req, res) => {
    let queryText = `delete from feedback where id = $1;`;

    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('delete request successful');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

// put route to toggle flag status of entry with id req.params.id
router.put('/:id', (req, res) => {
    let queryText = `update feedback set "flagged" = $1 
    where id = $2;`;

    pool.query(queryText, [req.body.flagStatus, req.params.id]).then((result) => {
        console.log('result from put', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
    });
})

module.exports = router;