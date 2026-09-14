import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blog';
import type { BlogPost } from '../data/blog';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import './BlogPage.css';

interface BlogDetailPageProps {
  post: BlogPost;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ post }) => {
  const { navigate } = useRouter();

  // Related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="blog-detail-view">
      <article className="blog-detail-article section-padding-top">
        <div className="container blog-detail-container">
          {/* Back button */}
          <button
            className="back-btn"
            onClick={() => navigate('/blog')}
            data-cursor="pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </button>

          {/* Article Header */}
          <div className="article-header-meta">
            <div className="article-cat-pill">{post.category}</div>
            <h1 className="article-main-title">{post.title}</h1>

            <div className="article-byline-bar">
              <div className="author-badge">
                <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                <div>
                  <strong className="byline-author-name">{post.author.name}</strong>
                  <span className="byline-author-role">{post.author.role}</span>
                </div>
              </div>

              <div className="article-date-read">
                <span><Calendar size={14} /> {post.date}</span>
                <span>•</span>
                <span><Clock size={14} /> {post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="article-hero-banner">
            <img src={post.image} alt={post.title} className="article-hero-img" />
          </div>

          {/* Article Content Body */}
          <div className="article-body-prose">
            <p className="prose-lead">{post.excerpt}</p>

            {post.content.map((paragraph, index) => (
              <p key={index} className="prose-paragraph">{paragraph}</p>
            ))}

            {/* Tags Row */}
            <div className="article-tags-row">
              <span className="tags-label">Tagged in:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="article-tag-item">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Reading */}
      <section className="related-articles-section section-padding">
        <div className="container">
          <div className="related-articles-header">
            <span className="section-eyebrow">recommended reading</span>
            <h2 className="case-title-line">More Insights</h2>
          </div>

          <div className="articles-grid">
            {relatedPosts.map((rPost) => (
              <article
                key={rPost.id}
                className="article-card"
                onClick={() => navigate(`/blog/${rPost.slug}`)}
                data-cursor="pointer"
              >
                <div className="article-media">
                  <img src={rPost.image} alt={rPost.title} className="article-img" loading="lazy" />
                  <span className="article-category-tag">{rPost.category}</span>
                </div>

                <div className="article-body">
                  <div className="article-meta-row">
                    <span><Calendar size={13} /> {rPost.date}</span>
                    <span><Clock size={13} /> {rPost.readTime}</span>
                  </div>

                  <h3 className="article-card-title">{rPost.title}</h3>
                  <p className="article-card-excerpt">{rPost.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
