import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';
import { Home, Films, OneFilm, Acteurs, OneActeur, Admins, AdminsManage } from "./views";
import { NavBar } from "./components";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<OneFilm />} />
          <Route path="/acteurs" element={<Acteurs />} />
          <Route path="/acteurs/:id" element={<OneActeur />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/admins/add" element={<AdminsManage />} />
          <Route path="/admins/update/:email" element={<AdminsManage />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
