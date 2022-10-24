import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title";
import App from "./App";
import Form from "./Form";
import Question from "./Question";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Title />
    <App />
    <Form />
    <Question />
  </React.StrictMode>
);
