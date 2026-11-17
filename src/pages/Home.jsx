import { Link } from "react-router-dom";
import data from "../data/posts.json";
import PostCard from "../components/PostCard.jsx";

const categoryIcons = {
  "إضاءة": "fa-sun",
  "بورتريه": "fa-user",
  "مناظر طبيعية": "fa-mountain",
  "تقنيات": "fa-sliders",
  "معدات": "fa-gear",
};

function Home() {
  const { posts, categories } = data;
  const mainPost = posts.find((post) => post.featured);
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);
  const authorsCount = new Set(posts.map((post) => post.author.name)).size;

  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <span className="pill-badge mb-4">مرحباً بك في عدسة</span>
          <h1 className="hero-title">
            اكتشف <span className="text-accent">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="hero-text mx-auto">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <Link to="/blog" className="btn btn-orange btn-lg">
              استكشف المقالات
              <i className="fa-solid fa-arrow-left me-2"></i>
            </Link>
            <Link to="/blog" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-circle-info ms-2"></i>
              اعرف المزيد
            </Link>
          </div>

          <div className="row g-3 justify-content-center mt-5 stats">
            <div className="col-6 col-md-3 col-lg-2">
              <div className="stat-box">
                <i className="fa-solid fa-newspaper"></i>
                <strong>{posts.length}</strong>
                <small>مقالة</small>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="stat-box">
                <i className="fa-solid fa-users"></i>
                <strong>+10 ألف</strong>
                <small>قارئ</small>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="stat-box">
                <i className="fa-solid fa-folder-open"></i>
                <strong>{categories.length}</strong>
                <small>تصنيفات</small>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="stat-box">
                <i className="fa-solid fa-pen-nib"></i>
                <strong>{authorsCount}</strong>
                <small>كاتب</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <span className="pill-badge mb-3">مميز</span>
            <h2 className="section-title">مقالات مختارة</h2>
            <p className="muted-text mb-0">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <Link to="/blog" className="btn btn-orange">
            عرض الكل
            <i className="fa-solid fa-chevron-left me-2"></i>
          </Link>
        </div>

        {mainPost && (
          <article className="feature-card mb-4">
            <div className="row g-0">
              <div className="col-lg-6 order-lg-2">
                <img src={mainPost.image} alt={mainPost.title} className="feature-img" />
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="feature-body">
                  <div className="post-meta mb-3">
                    <span className="img-badge static">{mainPost.category}</span>
                    <span>
                      <i className="fa-regular fa-clock ms-1"></i>
                      {mainPost.readTime}
                    </span>
                  </div>
                  <h3 className="feature-title">
                    <Link to={`/blog/${mainPost.id}`}>{mainPost.title}</Link>
                  </h3>
                  <p className="muted-text">{mainPost.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <Link to={`/blog/${mainPost.id}`} className="read-link">
                      اقرأ المقال
                      <i className="fa-solid fa-arrow-left me-2"></i>
                    </Link>
                    <div className="d-flex align-items-center gap-2">
                      <div className="text-end lh-sm">
                        <div className="fw-bold small">{mainPost.author.name}</div>
                        <small className="muted-text">{mainPost.author.role}</small>
                      </div>
                      <img src={mainPost.author.avatar} alt={mainPost.author.name} className="avatar-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        <div className="row g-4">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="text-center mb-5">
          <span className="pill-badge mb-3">التصنيفات</span>
          <h2 className="section-title">استكشف حسب الموضوع</h2>
          <p className="muted-text">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="row g-3">
          {categories.map((category) => (
            <div key={category.name} className="col-6 col-md-4 col-lg">
              <div className="category-card">
                <span className="category-icon">
                  <i className={"fa-solid " + categoryIcons[category.name]}></i>
                </span>
                <h3 className="h6 fw-bold mb-1">{category.name}</h3>
                <small className="muted-text">
                  {posts.filter((post) => post.category === category.name).length} مقالة
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="newsletter text-center">
          <span className="newsletter-icon">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <h2 className="section-title h3">
            اشترك في <span className="text-accent">نشرتنا</span> الإخبارية
          </h2>
          <p className="muted-text">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <input
              type="email"
              className="form-control dark-input newsletter-input"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button type="button" className="btn btn-orange">
              اشترك الآن
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
