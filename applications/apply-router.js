const express = require("express");

const Application = require("./apply-model");

const router = express.Router();

router.get("/", (req, res) => {
  Application.get()
    .then(application => {
      res.status(200).json(application);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching Application from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Application.getById(id)
    .then(apply => {
      if (!apply[0]) {
        res.status(404).json({ message: "Invalid apply ID" });
      } else {
        res.status(200).json(apply);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching application from database" });
    });
});

router.post("/", (req, res) => {
  const apply = req.body;

  Application.insert(apply)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding application to database" });
    });
});

router.delete('/:id', (req, res) => {
  Application.deleteId(req.params.id)
  .then(apply => {
      console.log(apply)
      if (!apply) {
          res.status(404).json({message: " No application exists by that ID!"})
      } else {
          res.status(200).json({message: "deleted"})
      }
  })
  .catch(err => {
      console.log(err)
      res.status(500).json(err)
  })
}) 

router.delete("/", (req, res) => {
  const apply = req.body;

  Application.remove(apply)
  .then(count => {
    res.status(201).json(count);
  })
  .catch(err => {
    res.status(500).json({ message: "Error deleting all applications to database" });
  });
    
});


module.exports = router; 