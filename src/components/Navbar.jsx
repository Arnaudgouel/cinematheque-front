import { Link } from "react-router-dom";
import Logo from "../img/logo.png"

const NavBar = () => {
  return (
    <header className="p-3 bg-dark text-white top-0" style={{zIndex: "1000"}}>
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src={Logo} alt="Logo"/>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li><Link to="/films" className="nav-link px-2 text-white">Films</Link></li>
            <li><Link to="/acteurs" className="nav-link px-2 text-white">Acteurs</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { NavBar };