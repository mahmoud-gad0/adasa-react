import { Link, NavLink } from "react-router-dom";
import data from "../data/posts.json";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top">
      <div className="container">
        <Link className="brand" to="/">
          <span className="brand-logo">
            <i className="fa-solid fa-camera-retro"></i>
          </span>
          <span>
            <span className="brand-name">{data.siteInfo.name}</span>
            <span className="brand-tag">{data.siteInfo.tagline}</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="القائمة"
        >
          <i className="fa-solid fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="nav-pill mx-auto">
            <li>
              <NavLink to="/" end>
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">المدونة</NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Link to="/blog" className="btn btn-orange">
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
