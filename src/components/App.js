import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../blocks/Pages.css";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import Register from "../components/Register";
import Login from "./Login";
import InfoTooltip from "../components/InfoTooltip";
import ProtectedRoute from "../components/ProtectedRoute";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/"></Route>
        <Route
          path="/main"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
