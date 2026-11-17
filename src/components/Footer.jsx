import { Link } from "react-router-dom";
import data from "../data/posts.json";

function Footer() {
  const { siteInfo, categories } = data;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-lg-4">
            <div className="brand mb-3">
              <span className="brand-logo">
                <i className="fa-solid fa-camera-retro"></i>
              </span>
              <span className="brand-name">{siteInfo.name}</span>
            </div>
            <p className="muted-text">{siteInfo.description}</p>
            <div className="d-flex gap-2">
              <span className="social-icon"><i className="fa-brands fa-x-twitter"></i></span>
              <span className="social-icon"><i className="fa-brands fa-github"></i></span>
              <span className="social-icon"><i className="fa-brands fa-linkedin"></i></span>
              <span className="social-icon"><i className="fa-brands fa-youtube"></i></span>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h3 className="footer-title">استكشف</h3>
            <ul className="footer-list">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h3 className="footer-title">التصنيفات</h3>
            <ul className="footer-list">
              {categories.map((category) => (
                <li key={category.name}>
                  <span>{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h3 className="footer-title">ابق على اطلاع</h3>
            <p className="muted-text small">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <input
              type="email"
              className="form-control dark-input mb-2"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button type="button" className="btn btn-orange w-100">
              اشترك
            </button>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2 py-3 small muted-text">
          <span>© 2026 {siteInfo.name}. جميع الحقوق محفوظة</span>
          <span>سياسة الخصوصية &nbsp;|&nbsp; شروط الخدمة</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
