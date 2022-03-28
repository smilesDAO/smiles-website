import { useHistory } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/smiles-logo.svg";
import logoText from "../img/smiles-logo-text.svg";
import Hamburger from "./atoms/Hamburger";

const Nav = () => {
  const history = useHistory();
  const [selectedNavigation, setSelectedNavigation] = useState("none");

  useEffect(() => {
    return history.listen(async (location) => {
      const newRoute = history.location.pathname.split("/")[1];
      setSelectedNavigation(newRoute);
    })
  }, [history])

  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <ul>
          <li>
            <Link className="flex justify-center align-center remove-all-link-styling" to="/" >
              <div className="nav-logo">
                <img className="logo" src={logo} alt="NftFloorPrice logo" />
                <img className="logo-text" src={logoText} alt="NftFloorPrice logo" />
              </div>
            </Link>
          </li>
          <li className="hamburger-item">
            <Hamburger />
          </li>
          {
            ["wtf", "how", "faq", "docs"].map((page, indx) => {
              return (
                <li
                  className={`${selectedNavigation === page ? "selected" : ""} scale-on-hover nav-item`}
                  data-id="donate"
                  key={indx}>
                  <Link to={`/${page}`} className="remove-all-link-styling  ">{page.toUpperCase()}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Nav;
