// controllers/studentController.js
const Student = require('../models/Student');

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  const { name, grade, age } = req.body;
  try {
    const newStudent = new Student({ name, grade, age });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating student' });
  }
};

// Update a student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, grade, age } = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, { name, grade, age }, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating student' });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting student' });
  }
};

module.exports = { getStudents, createStudent, updateStudent, deleteStudent };
