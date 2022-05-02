import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';
import { Home, Films, OneFilm, Acteurs, OneActeur, Admins, AdminsManage, Login } from "./views";
import { NavBar } from "./components";
import { useCookies } from "react-cookie";
import { Protected } from "./utils/Protected";

function App() {
  const [cookies, setCookies] = useCookies(["logged"]);
  return (
    <Fragment>
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NavBar />} >
            <Route index element={<Home />} />
            <Route path="films" element={<Films />} />
            <Route path="films/:id" element={<OneFilm />} />
            <Route path="acteurs" element={<Acteurs />} />
            <Route path="acteurs/:id" element={<OneActeur />} />
            <Route path="admins" element={<Protected isLoggedIn={cookies.logged}><Admins /></Protected>} />
            <Route path="admins/add" element={<Protected isLoggedIn={cookies.logged}><AdminsManage /></Protected>} />
            <Route path="admins/update/:email" element={<Protected isLoggedIn={cookies.logged}><AdminsManage /></Protected>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
