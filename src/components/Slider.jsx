import img1 from "../img/slider/0188782.jpg"
import img2 from "../img/slider/0593361.jpg"
import img3 from "../img/slider/0765165.jpg"
import img4 from "../img/slider/0876005.jpg"
import img5 from "../img/slider/4003801.jpg"
import img6 from "../img/slider/5024052.jpg"
import img7 from "../img/slider/5466391.jpg"



const Slider = () => {
 return (
  <div className="">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={img7} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
 )
}

export { Slider };