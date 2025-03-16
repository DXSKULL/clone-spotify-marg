import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import logo from "../../../assets/img/logo.svg";
import logoDark from "../../../assets/img/logo-dark.svg";
import { useState } from "react";
import { ROUTES } from "../../../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const { isLightTheme } = useTheme();

  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (searchInput.trim()) {
      navigate(`${ROUTES.SEARCH_PAGE}?query=${searchInput}`);
    }

    setSearchInput("");
  }

  return (
    <div className={styles.header}>
      <div className={styles.part}>
        <img
          src={isLightTheme ? logoDark : logo}
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
      <div className={styles.part}>
        <Link to={ROUTES.TOP_ALBUMS_PAGE} className={styles.btn}>
          <GrHomeRounded />
        </Link>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Что хочешь включить?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </form>
      </div>
      <div className={styles.part}></div>
    </div>
  );
}
