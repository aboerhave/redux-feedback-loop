const express = require('express');
const { useLayoutEffect } = require('react');
const { unstable_renderSubtreeIntoContainer } = require('react-dom');
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

router.get('/', (req, res) => {
    let queryText = `select * from feedback order by id desc;`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get feedback request', error);     
    });
});

router.delete('/:id', (req, res) => {
    console.log('req.params.id', req.params.id);
    
    let queryText = `delete from feedback where id = $1;`;

    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('delete request successful');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    console.log('put req.params.id', req.params.id);
    console.log('put req.body.data', req.body.flagStatus);
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