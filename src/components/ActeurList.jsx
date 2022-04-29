import { useEffect, useState } from "react";
import { Acteur } from "./Acteur";

const ActeurList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/acteurs")
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
              <p className="btn btn-primary disabled placeholder col-6"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row rows-col-md-3 rows-col-sm-2 rows-col-1 g-3">
        {items.map(item => <Acteur key={item.id_acteur} item={item}/>)}
      </div>
    </div>
  )
}

export { ActeurList }