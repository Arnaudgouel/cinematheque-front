import { useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png"



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["logged"])

  const handleSubmit = (e) => {
    e.preventDefault()
    var data = new FormData()
    data.append("email", email)
    data.append("password", password)
    var myInit = { 
      method: 'POST',
      body : data
    };
    fetch("https://127.0.0.1:8000/login", myInit)
      .then(res => res.json())
      .then(
        (res) => {
          console.log(res)
          if (res.Access === "OK") {
            setCookies("logged", true, {
              path : "/"
            })
            console.log(cookies)
            // window.location.reload()
            navigate("/")
          }
          else {

          }
        }
      )
  }
  return (
    <div className="container text-center my-auto">
      <div className="row align-items-center">
        <div className="col-md-4 col-12 offset-md-4">
          <Link to={"/"}><img src={Logo} alt="logo" /></Link>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email} onInput={e => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de Passe</label>
              <input type="password" className="form-control" id="password" name="password" aria-describedby="passwordHelp" value={password} onInput={e => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { LoginForm }