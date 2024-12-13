import React from "react";

function QuestionPreview({ questions }) {
  return (
    <div className="question-preview">
      <h2>Survey Preview</h2>
      {questions.map((q) => (
        <div key={q.id} className="preview-question">
          <p>{q.text}</p>
          {q.type === "mcq" ? (
            <div>
              {q.options.map((option, index) => (
                <div key={index}>
                  <input type="radio" name={`question-${q.id}`} />
                  {option}
                </div>
              ))}
            </div>
          ) : (
            <textarea placeholder="Your answer" />
          )}
        </div>
      ))}
    </div>
  );
}

export default QuestionPreview;
