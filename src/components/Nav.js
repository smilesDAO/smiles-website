import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/smiles-logo.svg";
import logoText from "../img/smiles-logo-text.svg";
import Hamburger from "./atoms/Hamburger";

const Nav = () => {
  const [selectedNavigation, setSelectedNavigation] = useState("none");
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const history = useHistory();
  const menuItems = ["wtf", "how", "faq", "docs"];

  useEffect(() => {
    return history.listen(async (location) => {
      const newRoute = history.location.pathname.split("/")[1];
      setSelectedNavigation(newRoute);
    })
  }, [history])

  const closeMenu = () => {
    setHamburgerIsOpen(false);
  }

  return (
    <div className="nav-container-outer">
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
            {
              menuItems.map((page, indx) => {
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
            {/* ONLY SHOWS IF VW <= 630px */}
            <li className="hamburger-item">
              <Hamburger hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen}/>
            </li>
          </ul>
        </div>
      </div>
      {/* ONLY SHOWS IF VW <= 630px */}
      <div className={`mobile-menu ${hamburgerIsOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner-container">
          {menuItems.map((page, indx) => {
            return (
              <Link to={`/${page}`} className="remove-all-link-styling" onClick={closeMenu}>
                <h2>
                  {page.toUpperCase()}
                </h2>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
