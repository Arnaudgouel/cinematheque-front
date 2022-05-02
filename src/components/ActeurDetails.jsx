import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ActeurDetails = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  let params = useParams()

  useEffect(() => {

    fetch("https://127.0.0.1:8000/acteurs/one?acteur_id=" + params.id )
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
  }, [params])
  if (error) {
    return <div>Erreur : {error.message}</div>
  }
  else if (!isLoaded) {
    return (
      <div className="container mt-5">
        <div className="row rows-col-md-3 rows-col-sm-2 rows-col-1">
          <div className="card" aria-hidden="true">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="btn btn-success disabled placeholder col-6"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <img className="img-fluid position-sticky top-0" src={items.photo} alt={items.nom} />
        </div>
        <div className="col-md-8 col-12">
          <h2>{items.prenom} {items.nom} <span className="badge rounded-pill bg-danger">{items.naissance}</span></h2>
          <h3>Lieu de naissance : {items.lieu_naissance}</h3>
          <p className="content" dangerouslySetInnerHTML={{__html: items.biographie}}></p>
        </div>
      </div>
    </div>
  )
}

export { ActeurDetails }