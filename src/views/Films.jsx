import { FilmList } from "../components";

const Films = () => {
  
  return (
    <div>
      <div className="text-center mt-5">
        <h1 >Liste des films disponibles : </h1>
        <FilmList/>
      </div>
    </div>
  )
}


export { Films };