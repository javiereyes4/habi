import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./navbar.css";
import en from "../../../assets/en.png";
import es from "../../../assets/es.png";
import { LOCALES } from "../../../i18n";

function NavBar(props) {
  return (
    <ul>
      <li>
        <Link className="active" to="user">
          <FormattedMessage id="user" />
        </Link>
      </li>
      <li>
        <Link to="property">
          <FormattedMessage id="property" />
        </Link>
      </li>
      <li>
        <Link to="getProperty">
          <FormattedMessage id="getProperty" />
        </Link>
      </li>
      <li className="language">
        <div className="languageImgContainer">
          <img
            className="languageImageEn"
            src={en}
            alt="English Language"
            onClick={() => {
              props.changeLanguage(LOCALES.ENGLISH);
            }}
          />
          <img
            className="languageImageEs"
            src={es}
            alt="Spanish Language"
            onClick={() => {
              props.changeLanguage(LOCALES.SPANISH);
            }}
          />
        </div>
      </li>
    </ul>
  );
}

export default NavBar;
