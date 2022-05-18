import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//STYLING

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// IMPORTING PAGES

import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
import About from "./pages/About";
import UsersPortal from "./pages/UsersPortal";

//Shows a single resource
import ShowResource from "./pages/ShowResource";
import CreateUser from "./components/CreateUser";
import NewResource from "./pages/NewResource";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:id" element={<ShowResource />} />
            <Route path="/resources/create" element={<NewResource />} />
            <Route path="/users" element={<UsersPortal />} />
            <Route path="/users/:uid/" element={<UserPortal />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/create" element={<CreateUser />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
