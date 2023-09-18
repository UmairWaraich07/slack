import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useState } from "react";
import { getDataLayerValue } from "./DataLayer";
import Home from "./Home";

function App() {
  const [{ user }, dispatch] = getDataLayerValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/room/:roomId" element={<Chat />} />

                <Route path="/" exact={true} element={<Home />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
