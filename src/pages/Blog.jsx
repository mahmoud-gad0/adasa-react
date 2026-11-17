import { useState } from "react";
import data from "../data/posts.json";
import PostCard from "../components/PostCard.jsx";

const PER_PAGE = 6;

function Blog() {
  const { posts, categories } = data;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const filteredPosts = posts.filter((post) => {
    const matchCategory = category === "الكل" || post.category === category;
    const text = search.trim().toLowerCase();
    const matchSearch =
      post.title.toLowerCase().includes(text) ||
      post.excerpt.toLowerCase().includes(text);
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const currentPosts = filteredPosts.slice(start, start + PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleCategory(name) {
    setCategory(name);
    setPage(1);
  }

  function goToPage(number) {
    setPage(number);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section className="page-head text-center">
        <div className="container">
          <h1 className="section-title">المدونة</h1>
          <p className="muted-text mb-0">
            اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث
          </p>
        </div>
      </section>

      <div className="filter-bar">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="d-flex flex-wrap gap-2">
            <button
              type="button"
              className={"filter-btn " + (category === "الكل" ? "active" : "")}
              onClick={() => handleCategory("الكل")}
            >
              جميع المقالات
            </button>
            {categories.map((item) => (
              <button
                key={item.name}
                type="button"
                className={"filter-btn " + (category === item.name ? "active" : "")}
                onClick={() => handleCategory(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              className="form-control dark-input"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="muted-text mb-0">
            عرض <strong className="text-white">{filteredPosts.length}</strong> مقالات
          </p>
          <div className="view-toggle">
            <button
              type="button"
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
              aria-label="عرض شبكي"
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
            <button
              type="button"
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
              aria-label="عرض قائمة"
            >
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </div>

        {currentPosts.length === 0 ? (
          <div className="text-center py-5">
            <h2 className="h5">لا توجد مقالات مطابقة</h2>
            <p className="muted-text">جرّب كلمة بحث أخرى أو غيّر التصنيف.</p>
          </div>
        ) : (
          <div className="row g-4">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} view={view} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-5 text-center" aria-label="التنقل بين الصفحات">
            <div className="d-flex justify-content-center gap-2 mb-2">
              <button
                className="page-btn"
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                aria-label="السابق"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  className={"page-btn " + (number === page ? "active" : "")}
                  onClick={() => goToPage(number)}
                >
                  {number}
                </button>
              ))}
              <button
                className="page-btn"
                disabled={page === totalPages}
                onClick={() => goToPage(page + 1)}
                aria-label="التالي"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
            <small className="muted-text">
              صفحة {page} من {totalPages}
            </small>
          </nav>
        )}
      </div>
    </>
  );
}

export default Blog;
