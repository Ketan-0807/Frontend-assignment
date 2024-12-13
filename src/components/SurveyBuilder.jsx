import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import QuestionPreview from "./QuestionPreview";
import "../components/SurveyBuilder.css";

function SurveyBuilder() {
  const [questions, setQuestions] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(questions);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setQuestions(reordered);
  };

  const addQuestion = (type) => {
    setQuestions([...questions, { id: Date.now(), type, text: "", options: [] }]);
  };

  const handleQuestionTextChange = (id, newText) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, text: newText } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (id) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === id) {
        return { ...q, options: [...q.options, ""] };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionId, optionIndex, newOption) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            options: q.options.map((opt, index) =>
              index === optionIndex ? newOption : opt
            ),
          }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handlePreviewToggle = () => {
    setPreviewMode(!previewMode);
  };

  return (
    <div className="survey-builder">
      <button onClick={() => addQuestion("mcq")} className="add-question-btn">
        Add MCQ Question
      </button>
      <button onClick={() => addQuestion("short-answer")} className="add-question-btn">
        Add Short Answer Question
      </button>
      <button onClick={handlePreviewToggle} className="preview-btn">
        {previewMode ? "Edit Questions" : "Preview"}
      </button>

      {previewMode ? (
        <QuestionPreview questions={questions} />
      ) : (
        questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            onChange={handleQuestionTextChange}
            onAddOption={handleAddOption}
            onOptionChange={handleOptionChange}
          />
        ))
      )}
    </div>
  );
}

export default SurveyBuilder;
