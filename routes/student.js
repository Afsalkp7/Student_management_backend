const express = require("express");
const router = express.Router()
const studentController = require("../controllers/studentController")

router.get("/",studentController.showStudents)

router.post("/",studentController.addStudent)

router.put("/",studentController.editStudent)

router.delete("/",studentController.deleteStudent)

module.exports = router;