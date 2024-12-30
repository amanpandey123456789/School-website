// src/App.js
import React, { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from './api';
import Navbar from './components/Navbar';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', grade: '', age: '' });

  // Fetch students on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = await getStudents();
      setStudents(studentList);
    };

    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.grade && newStudent.age) {
      const createdStudent = await createStudent(newStudent);
      setStudents([...students, createdStudent]);
      setNewStudent({ name: '', grade: '', age: '' });  // Clear form
    }
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter(student => student._id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <h1 className="mb-8 text-3xl font-semibold text-blue-600">Students List</h1>

      <form className="p-6 mb-10 space-y-4 bg-white rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student name"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="grade">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student grade"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter student age"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Student
        </button>
      </form>

      <div className="w-96">
        <ul className="space-y-4">
          {students.map(student => (
            <li key={student._id} className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                <p className="text-gray-600">{student.grade} - {student.age} years old</p>
              </div>
              <button
                onClick={() => handleDelete(student._id)}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
