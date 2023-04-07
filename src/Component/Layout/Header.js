import { Link } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.container}>
      <ul>
        <li><h1>Ticket Booking App</h1></li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
