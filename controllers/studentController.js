const studentCollection = require("../models/studentModel");

const addStudent = async (req, res) => {
    const { name, standard, age } = req.body;

    if (!name || !standard || !age) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const student = new studentCollection({ name, standard, age });
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while adding the student" });
    }
};

const showStudents = async (req, res) => {
    try {
        const studentsData = await studentCollection.find();
        if (studentsData.length === 0) {
            return res.status(404).json({ message: "Students not found" });
        }
        res.status(200).json({ studentsData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while retrieving students" });
    }
};

const editStudent = async (req, res) => {
    const { studentId, name, age, standard } = req.body;

    if (!studentId || !name || !age || !standard) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const updatedUser = await studentCollection.findByIdAndUpdate(
            studentId,
            { name, age, standard },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while updating the student" });
    }
};

const deleteStudent = async (req, res) => {
    const { studentId } = req.body;

    if (!studentId) {
        return res.status(400).json({ error: "Student ID is required" });
    }

    try {
        const deletedUser = await studentCollection.findByIdAndDelete(studentId);

        if (!deletedUser) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while deleting the student" });
    }
};

module.exports = {
    addStudent,
    showStudents,
    editStudent,
    deleteStudent,
};
