import { Link } from "react-router-dom";

import classes from './MainNav.module.css';

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Notes</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
