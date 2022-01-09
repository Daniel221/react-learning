import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <div className="question">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {data.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
