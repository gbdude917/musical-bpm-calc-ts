import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1>Musical BPM Calculator</h1>
      <div className={classes.container}>
        <a
          className={classes.link}
          href="https://github.com/gbdude917"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className={classes.icon} />
        </a>
      </div>
    </header>
  );
}

export default Header;
