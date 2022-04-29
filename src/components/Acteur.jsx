import { Link } from "react-router-dom"


const Acteur = ({item}) => {
  return (
    <div className="card m-3 position-relative" style={{maxWidth: "25rem"}}>
      <Link to={`/acteurs/${item.id_acteur}`}>
        <div className="position-relative">
          <img src={item.photo} className="card-img-top" alt={item.titre}/>
          <span className="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-success">{item.lieu_naissance}</span>
        </div>
      </Link>
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{item.naissance}</span>
      <div className="card-body">
        <h5 className="card-title">{item.prenom} {item.nom}</h5>
        <p className="card-text">{item.biographie.slice(0, 200)}...</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col"><Link to={`/acteurs/${item.id_acteur}`} className="btn btn-success">Lire la suite</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Acteur }