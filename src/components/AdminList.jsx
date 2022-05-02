import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminRow } from "./AdminRow";

const AdminList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/admins")
      .then(res => res.json())
      .then(
        (res) => {
          setIsLoaded(true)
          console.log(res)
          setItems(res)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
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
    <div className="container mt-5">
      <div className="d-flex flex-row-reverse"><Link to={`/admins/add`} className="btn btn-success">Ajouter</Link></div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td>Email</td>
              <td>Nom</td>
              <td>Prenom</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {items.map(item => <AdminRow key={item.email} item={item}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { AdminList }