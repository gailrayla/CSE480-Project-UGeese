import React, { useState } from "react";
import Form from "./components/login/form";
import SignUpForm from "./components/signup/signup";
function App() {
  const [authState, setAuthState] = useState("login");

  const renderForm = () => {
    if (authState === "login") {
      return <Form setAuthState={setAuthState} />;
    } else if (authState === "signup") {
      return <SignUpForm setAuthState={setAuthState} />;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {renderForm()}
    </div>
  );
}

export default App;
