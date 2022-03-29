import navbar from "../styles/navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div>
        <Link href={"/"}>
          <a className={navbar.main}>schedule manager v1.0</a>
        </Link>
      </div>
      <ul className={navbar.list}>
        <li>
          {" "}
          <input type="text" placeholder="Search here..." />{" "}
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/schedule/new">Add</Link>{" "}
        </li>
        <li>
          <a> Features </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
