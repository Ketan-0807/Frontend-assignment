import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header">
      <h1>Welcome to the Survey Builder</h1>
      <p>Click below to start either creating or taking a survey.</p>
      </div>
      <div>
        <Link to="/create-survey">
          <button>Create Survey</button>
        </Link>
      </div>
      
      <div>
        <Link to="/survey">
          <button>Take Survey</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
