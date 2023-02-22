import "./App.css";
import { Home } from "./screens/Home";
import { Ressources } from "./screens/Ressources";
import { Routes, Route, NavLink } from "react-router-dom";
import { Contact } from "./screens/Contact";

function App() {
  return (
    <div className="container mt-10">
      <header className="mb-5">
        <nav className="flex justify-end">
          <NavLink
            className="font-extrabold mr-3"
            style={({ isActive }) => ({
              color: isActive ? "blueviolet" : "black",
            })}
            to="/"
          >
            Accueil
          </NavLink>{" "}
          <NavLink
            className="font-extrabold mr-3"
            style={({ isActive }) => ({
              color: isActive ? "blueviolet" : "black",
            })}
            to="/ressources"
          >
            Ressources
          </NavLink>{" "}
          <NavLink
            className="font-extrabold mr-3"
            style={({ isActive }) => ({
              color: isActive ? "blueviolet" : "black",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
