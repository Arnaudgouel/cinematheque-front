import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const FilmDetails = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  let params = useParams()

  useEffect(() => {

    fetch("https://127.0.0.1:8000/films/index?film_id=" + params.id )
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
              <p className="btn btn-primary disabled placeholder col-6"></p>
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
          <img className="img-fluid" src={items.affiche} alt={items.titre} />
        </div>
        <div className="col-md-8 col-12">
          <h2>{items.titre} <span className="badge rounded-pill bg-danger">{items.duree}</span></h2>
          <h3>Date de sortie : {items.date_de_sortie}</h3>
          <p>{items.synopsis}</p>
          <a href={items.video_film} className="btn btn-primary" target="_blank" rel="noreferrer">Voir la vidéo</a>
        </div>
      </div>
    </div>
  )
}

export { FilmDetails }