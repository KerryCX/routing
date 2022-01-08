import './App.css';
import * as React from 'react-dom';
import {Testing} from "./pages/TestingPage.jsx";
import {Projects} from "./pages/ProjectsPage.jsx"
import {Contacts} from "./pages/ContactsPage";
import {HomePage} from "./pages/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <nav className="nav-bar">
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contacts"}>Contacts</Link>
            <Link to={"/testing"}>Testing</Link>
            <Link to={"/"}>Homepage</Link>
          </nav>
          <Routes>
            <Route path={"/projects"}
                   element={<Projects/>}/>
            <Route path={"/contacts"}
                   element={<Contacts/>}/>
            <Route path={"/testing"}
                   element={<Testing/>}/>
            <Route path={"/"}
                   element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
