import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Greate Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All Qoutes
            </NavLink>
            </li>
            <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add Qoutes
            </NavLink>
            </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
