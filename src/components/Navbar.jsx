import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg sticky-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          MyDiary
        </a>
        <div>
          <ul className='nav nav-underline justify-content-end'>
            <li className='nav-item'>
              <Link
                className={`nav-link ${
                  window.location.hash === "#/" ? "active" : ""
                }`}
                to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${
                  window.location.hash === "#/archive" ? "active" : ""
                }`}
                to='/archive'>
                Archive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
