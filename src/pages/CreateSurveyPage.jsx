import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing

function Home() {
  return (
    <div>
      <h1>Welcome to the Survey App</h1>
      <Link to="/create-survey">
        <button className="create-survey-btn">Create Survey</button>
      </Link>
    </div>
  );
}

export default Home;
