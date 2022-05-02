import { Fragment } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png"
import { Search } from "./Search";

const NavBar = () => {

  const [cookies, setCookies, removeCookie] = useCookies(["logged"]);
  const navigate = useNavigate();

  const Login = () => {
    const handleClickDeconnexion = () => {
      removeCookie("logged")
      navigate("/")
    }

    console.log(cookies)

    if (!cookies.logged) {
      return (
        <div className="text-end">
          <Link to={"/login"}><button type="button" className="btn btn-outline-light me-2">Connexion</button></Link>
        </div>
      )
    }
    return (
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2" onClick={handleClickDeconnexion}>Deconnexion</button>
      </div>
    )
  }
  return (
    <Fragment>
      <header className="p-3 bg-dark text-white top-0 container-fluid" style={{zIndex: "1000"}}>
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src={Logo} alt="Logo"/>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/films" className="nav-link px-2 text-white">Films</Link></li>
              <li><Link to="/acteurs" className="nav-link px-2 text-white">Acteurs</Link></li>
              <li><Link to="/admins" className="nav-link px-2 text-white">Admins</Link></li>
            </ul>

            <Search />
            <Login/>
            
          </div>
        </div>
      </header>
      <Outlet/>
    </Fragment>
  )
}

export { NavBar };