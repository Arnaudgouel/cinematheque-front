import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminForm = ({emailProp}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (emailProp) {
      setEmail(emailProp)
      fetch("https://127.0.0.1:8000/admins/index?email=" + emailProp)
        .then(res => res.json())
        .then(
          (res) => {
            setIsLoaded(true)
            console.log(res)
            setItems(res)
            setNom(res.nom)
            setPrenom(res.prenom)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
    }
    else {
      setIsLoaded(true)
    }
  }, [emailProp])

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      "email" : email,
      "nom" : nom,
      "prenom" : prenom,
      "password" : password
    }
    var data = new FormData()
    data.append("email", email)
    data.append("nom", nom)
    data.append("prenom", prenom)
    data.append("password", password)
    var myInit = { 
      method: 'POST',
      body : data
    };
    console.log(body)
    console.log(data)
    if (emailProp) {
      fetch("https://127.0.0.1:8000/admins/index/update", myInit)
        .then(res => res.json())  
        .then(
          (res) => {
            if (res === true) {
              navigate(-1)
            }
          },
          (error) => {
            console.log(error)
          }
        )  
    } else {
      fetch("https://127.0.0.1:8000/admins/add", myInit)
        .then(res => res.json())  
        .then(
          (res) => {
            if (res === true) {
              navigate(-1)
            }
          },
          (error) => {
            console.log(error)
          }
        )  
    }
  }

  if (error) {
    return <div>Erreur : {error.message}</div>
  }
  else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} id="form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email} onInput={e => setEmail(e.target.value)} readOnly={emailProp ? true : false}/>
        </div>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input type="text" className="form-control" id="nom" name="nom" aria-describedby="nomHelp" value={nom} onInput={e => setNom(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prenom</label>
          <input type="text" className="form-control" id="prenom" name="prenom" aria-describedby="prenomHelp" value={prenom} onInput={e => setPrenom(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de Passe</label>
          <input type="password" className="form-control" id="password" name="password" aria-describedby="passwordHelp" value={password} onInput={e => setPassword(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  )
}

export { AdminForm }