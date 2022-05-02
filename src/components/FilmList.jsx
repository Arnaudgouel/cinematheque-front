import { useEffect, useState } from "react";
import { Film } from "./";

const FilmList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/films")
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
      <div className="row rows-col-md-3 rows-col-sm-2 rows-col-1 g-3">
        {items.map(item => <Film key={item.id_film} item={item}/>)}
      </div>
    </div>
  )
}

export { FilmList }