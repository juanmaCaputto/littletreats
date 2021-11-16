import Link from "next/link";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav>
        <ul>
          <li>
            <Link href="/">Cookies!</Link>
          </li>
          <li>
            <Link href="/new-pack">Add New Cookie!</Link>
          </li>
          <li>
            <HeaderCartButton onClick={props.onShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
