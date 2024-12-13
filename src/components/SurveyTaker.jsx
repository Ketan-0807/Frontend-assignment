import React, { useState } from "react";
import "../components/SurveyTaker.css";

function SurveyTaker() {
  // Example of dynamic questions fetched or passed from the SurveyBuilder
  const surveyQuestions = [
    { id: 1, type: "short-answer", text: "What is your name?" },
    { id: 2, type: "short-answer", text: "What is your favorite color?" },
    { id: 3, type: "multiple-choice", text: "Which fruits do you like?", options: ["Apple", "Banana", "Orange"] },
    { id: 4, type: "long-answer", text: "Describe your favorite vacation." }
  ];

  // State to store the answers
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const renderQuestion = (q) => {
    switch (q.type) {
      case "short-answer":
        return (
          <div key={q.id} className="question">
            <label>{q.text}</label>
            <input
              type="text"
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder={`Enter your ${q.text.toLowerCase()}`}
            />
          </div>
        );
      case "multiple-choice":
        return (
          <div key={q.id} className="question">
            <label>{q.text}</label>
            {q.options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${q.id}-${index}`}
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                />
                <label htmlFor={`option-${q.id}-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        );
      case "long-answer":
        return (
          <div key={q.id} className="question">
            <label>{q.text}</label>
            <textarea
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder={`Write your answer for "${q.text}"`}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="survey-taker">
      {surveyQuestions.map((q) => renderQuestion(q))}
      <button type="submit" className="submit-btn">Submit Survey</button>
    </div>
  );
}

export default SurveyTaker;
