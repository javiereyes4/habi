import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <ul>
      <li>
        <Link className="active" to="user">
          usuario
        </Link>
      </li>
      <li>
        <Link to="apto">Inmueble</Link>
      </li>
      <li className="language">
        Lenguaje
        {/* <a href="#about">About</a> */}
      </li>
    </ul>
  );
}

export default NavBar;
