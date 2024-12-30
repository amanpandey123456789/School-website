// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">Welcome to Our School</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {students.map(student => (
          <div key={student._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p>Grade: {student.grade}</p>
            <p>Age: {student.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
