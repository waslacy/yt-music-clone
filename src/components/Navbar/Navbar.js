import style from "./Navbar.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };

  return (
    <nav className={style.navbar}>
      <div className={`${style.container} container`}>
        <div className={style.logo}>
          <Logo />
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for musics and artists"
            />
          </label>
          <input type="submit" style={{ opacity: 0, height: 0, width: 0, position: 'absolute' }} />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
