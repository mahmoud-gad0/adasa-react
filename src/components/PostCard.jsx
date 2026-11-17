import { Link } from "react-router-dom";

function PostCard({ post, view = "grid" }) {
  const isList = view === "list";
  const date = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={isList ? "col-12" : "col-md-6 col-lg-4"}>
      <article className="post-card h-100">
        <div className="row g-0 h-100">
          <div className={isList ? "col-md-4" : "col-12"}>
            <Link to={`/blog/${post.id}`} className="post-media">
              <img
                src={post.image}
                alt={post.title}
                className={isList ? "post-img post-img-list" : "post-img"}
              />
              <span className="img-badge">{post.category}</span>
            </Link>
          </div>
          <div className={isList ? "col-md-8" : "col-12"}>
            <div className="post-body d-flex flex-column h-100">
              <div className="post-meta">
                <span>{date}</span>
                <span>
                  <i className="fa-regular fa-clock ms-1"></i>
                  {post.readTime}
                </span>
              </div>
              <h2 className="post-heading">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="muted-text">{post.excerpt}</p>
              <div className="post-footer mt-auto">
                <div className="d-flex align-items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="avatar-sm" />
                  <div className="lh-sm">
                    <div className="fw-bold small">{post.author.name}</div>
                    <small className="muted-text">{post.author.role}</small>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="round-btn" aria-label="قراءة المقال">
                  <i className="fa-solid fa-chevron-left"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostCard;
