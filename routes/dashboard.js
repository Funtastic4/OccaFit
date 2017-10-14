var express = require('express');
var router = express.Router();
var db = require('../database/index.js');

// we will add the routes for a particular user id
// get all the workouts posted by the user - select * from postings where userId = "x"
//

router.get('/', (req, res) => {
  var id = req.session.passport.user;
  db.getUserPostings(id, (err, dbResult) => {
    res.send(dbResult);
  })
})


router.get('/requests', (req, res) => {
  var id = req.session.passport.user;
  // will need user id and workout posting id
  db.getUserRequestPostings(id, (err, dbResult) => {
    res.send(dbResult);
  })
})

// all rows from accepted where userid = acceptUserid
// click on accept button from eachPosting
router.get('/accepted', (req,res) => {
  var id = req.session.passport.user;
  // will need user id and workout posting id
  db.getUserAcceptPostings(id, (err, dbResult) => {
    res.send(dbResult);
  })
});








module.exports = router;
