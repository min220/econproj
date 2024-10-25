import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Subjects.css';

const Subjects = () => {
  const [questions] = useState([
    { id: 1, question: "What is the capital of France?" },
    { id: 2, question: "What is the Pythagorean theorem?" },
    { id: 3, question: "Who wrote 'To Kill a Mockingbird'?" },
    { id: 4, question: "What is the largest planet in our solar system?" },
    { id: 5, question: "What is the process of photosynthesis?" },
  ]);

  return (
    <div className="question-bank-container">
      <h1 className="title">Question Bank</h1>
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.id} className="question-item">
            {q.question}
          </li>
        ))}
      </ul>
      {/* Add a link to the Subject.js page */}
      <Link to="/subject" className="subject-link">Go to Subject Page</Link>
    </div>
  );
};

export default Subjects;
