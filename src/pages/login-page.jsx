import React, { useState } from "react";
import useAuth from "../hooks/use-auth";
import { Redirect } from "react-router-dom";

function LoginPage() {
  const { login, logged } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  if (logged) {
    return <Redirect to="/tasks" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Password:</label>
        <input
          name="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginPage;
