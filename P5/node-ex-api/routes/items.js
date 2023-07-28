// import required essentials
const express = require("express");
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  {
    id: 1,
    title: "Create a project"
  },
  {
    id: 2,
    title: "Take a cofféé"
  },
  {
    id: 3,
    title: "Write new article"
  },
  {
    id: 4,
    title: "Walk toward home"
  },
  {
    id: 5,
    title: "Have some dinner"
  },
];

// this end-point of an API returns JSON data array
router.get("/", function (req, res) {
  res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.get("/:id", function (req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/add", function (req, res) {
  var recievedID = req.body.id;
  var recievedTitle = req.body.title;

  var newobj={
    "id": recievedID,
    "title": recievedName
  }

  data.push(newobj);
  res.status(200).json(data);
});

module.exports = router;