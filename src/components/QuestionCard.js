import React from "react";

function QuestionCard({ question, onChange, onAddOption, onOptionChange }) {
  const handleTextChange = (e) => {
    onChange(question.id, e.target.value);
  };

  const handleOptionChange = (index, e) => {
    onOptionChange(question.id, index, e.target.value);
  };

  const renderOptions = () => {
    return question.options.map((option, index) => (
      <div key={index} className="option">
        <input
          type={question.type === "mcq" ? "radio" : "checkbox"}
          name={`question-${question.id}`}
          value={option}
        />
        <input
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
          placeholder={`Option ${index + 1}`}
        />
      </div>
    ));
  };

  return (
    <div className="question-card">
      <input
        type="text"
        value={question.text}
        onChange={handleTextChange}
        placeholder="Enter your question"
      />
      {question.type === "mcq" && renderOptions()}
      <button onClick={() => onAddOption(question.id)} className="add-option-btn">
        Add Option
      </button>
    </div>
  );
}

export default QuestionCard;
