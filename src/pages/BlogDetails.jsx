import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/posts.json";
import PostCard from "../components/PostCard.jsx";
import NotFound from "./NotFound.jsx";

function BlogDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = data.posts.find((item) => item.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  const blocks = post.content.split("\n\n");
  const relatedPosts = data.posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);
  const date = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container py-5">
      <Link to="/blog" className="btn btn-ghost btn-sm mb-4">
        <i className="fa-solid fa-arrow-right ms-2"></i>
        العودة إلى المدونة
      </Link>

      <article className="mx-auto article">
        <span className="img-badge static mb-3">{post.category}</span>
        <h1 className="article-title">{post.title}</h1>

        <div className="d-flex align-items-center gap-3 my-4">
          <img src={post.author.avatar} alt={post.author.name} className="avatar" />
          <div className="lh-sm">
            <div className="fw-bold">{post.author.name}</div>
            <small className="muted-text">
              {post.author.role} - {date} - {post.readTime}
            </small>
          </div>
        </div>

        <img src={post.image} alt={post.title} className="article-cover mb-4" />

        <div className="article-body">
          {blocks.map((block, index) =>
            block.startsWith("## ") ? (
              <h2 key={index} className="h4 mt-4 text-accent">
                {block.slice(3)}
              </h2>
            ) : (
              <p key={index}>{block}</p>
            )
          )}
        </div>

        <div className="d-flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-5 pt-4">
          <h2 className="section-title h3 mb-4">مقالات ذات صلة</h2>
          <div className="row g-4">
            {relatedPosts.map((item) => (
              <PostCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetails;
