import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [displayCard, setDisplayCard] = useState("d-none");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);
  const [acteurs, setActeurs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchValue()
    }, 500)
  }, [search])

  const fetchValue = () => {
    if(search) {

      fetch("https://127.0.0.1:8000/films/recherche?search=" + search)
        .then(res => res.json())
        .then(
          (res) => {
            setIsLoaded(true)
            setFilms(res)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
      fetch("https://127.0.0.1:8000/acteurs/recherche?search=" + search)
        .then(res => res.json())
        .then(
          (res) => {
            setIsLoaded(true)
            setActeurs(res)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          }
        )
      setDisplayCard("d-block")
    }
    else {
      setDisplayCard("d-none")
    }
  }

  const handleLinkCLick = () => {
    setSearch("")
    setDisplayCard("d-none")
  }

  if(error) {
    return 
  }

  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
      <div className="position-relative">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." value={search} onInput={e => setSearch(e.target.value)}/>
        <div className={"card position-absolute w-100 top-100 text-dark " + displayCard} style={{maxHeight: "15rem", zIndex: "1000", overflow: "auto"}}>
          <hr></hr>
          <p className="text-center">Films ({films.length})</p>
          <hr></hr>
          {films.map(film => <Link key={film.id_film} to={`/films/${film.id_film}`} className="text-decoration-none" onClick={() => handleLinkCLick()}><div className="text-dark mb-1 text-decoration-none">{film.titre}</div></Link>)}
          <hr></hr>
          <p className="text-center">Acteurs ({acteurs.length})</p>
          <hr></hr>
          {acteurs.map(acteur => <Link key={acteur.id_acteur} to={`/acteurs/${acteur.id_acteur}`} className="text-decoration-none" onClick={() => handleLinkCLick()}><div className="text-dark mb-1" key={acteur.id_acteur}>{acteur.prenom} {acteur.nom}</div></Link>)}
        </div>
      </div>
    </form>
  )
}

export { Search }