import { Link } from "react-router-dom"


const Film = ({item}) => {
  return (
    <div className="card m-3 position-relative" style={{maxWidth: "25rem"}}>
      <Link to={`/films/${item.id_film}`}>
        <img src={item.affiche} className="card-img-top" alt={item.titre}/>
      </Link>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{item.duree}</span>
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">{item.date_de_sortie}</span>
      <div className="card-body">
        <h5 className="card-title">{item.titre}</h5>
        <p className="card-text">{item.synopsis}</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6"><Link to={`/films/${item.id_film}`} className="btn btn-success">Détails</Link></div>
            <div className="col-6"><a href={item.video_film} target="_blank" rel="noreferrer" className="btn btn-primary">Voir la vidéo</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Film }