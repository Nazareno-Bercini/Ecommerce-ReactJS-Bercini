
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {

  const {cartProducts} =useContext(CartContext)

    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">B.Camisetas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/primera_division">Primera Division</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/internacional">Internacionales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
      </ul>
      <Link to='/cart'>
      {cartProducts.length !== 0 && <p>{cartProducts.length}</p>}<CartWidget />
      </Link>

    </div>
  </div>
</nav>

    )
}

export default NavBar