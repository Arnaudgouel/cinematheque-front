import { Fragment, useEffect, useState } from "react"

const CardFilmAlaUne = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/films/populaire")
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

  const listItems = items.map(item => {
    return (
      <div key={item.id_film} className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 card position-relative" style={{maxWidth: "540px", textAlign:"center"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{item.duree}</span>
            <div className="row g-0">
              <div className="col-md-6 p-2">
                <img className="img-fluid" src={item.affiche} alt="Card cap"/>
                <span className="badge rounded-pill bg-success mt-3">{item.date_de_sortie}</span>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item.titre}</h5>
                  <p className="card-text">{item.synopsis}</p>
                  <a href={item.video_film} target="_blank" rel="noreferrer" className="btn btn-primary">Voir la vidéo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      
    )
  })

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
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
          <a className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    )
  } else {
    return (
      <Fragment>
        {listItems}
      </Fragment>
    )
  }
  
}

export { CardFilmAlaUne }