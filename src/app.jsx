import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AuthProvider from "./components/auth-provider";
import Navbar from "./components/navbar";
import PrivateRoute from "./components/private-route";
import LoginPage from "./pages/login-page";
import ProfilePage from "./pages/profile-page";
import TaskListPage from "./pages/task-list-page";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/tasks">
          <TaskListPage />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
