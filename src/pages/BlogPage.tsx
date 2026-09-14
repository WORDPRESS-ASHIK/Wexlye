import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blog';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import './BlogPage.css';

export const BlogPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Design Systems', 'Engineering', 'Branding', 'UX Design'];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="blog-page-view">
      {/* Blog Hero */}
      <section className="blog-hero-section section-padding-top">
        <div className="container">
          <div className="blog-hero-grid">
            <div className="blog-hero-titles">
              <h1 className="blog-hero-title">Insights</h1>
              <hr className="texan-divider" />
              <h2 className="blog-hero-sub">& Perspectives</h2>
            </div>

            <div className="blog-hero-desc">
              <p className="lead">
                Essays, architectural breakdowns, and design philosophies from the makers at Texan Agency.
              </p>
            </div>
          </div>

          {/* Featured Article Card */}
          <div 
            className="featured-article-card"
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
            data-cursor="pointer"
          >
            <div className="featured-media">
              <img src={featuredPost.image} alt={featuredPost.title} className="featured-img" />
            </div>

            <div className="featured-content">
              <div className="article-meta-badge">
                <span className="featured-cat">{featuredPost.category}</span>
                <span className="featured-read">
                  <Clock size={14} /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>

              <div className="featured-footer">
                <div className="author-info">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="author-avatar" />
                  <div>
                    <strong className="author-name">{featuredPost.author.name}</strong>
                    <span className="author-role">{featuredPost.author.role}</span>
                  </div>
                </div>

                <div className="read-more-arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="blog-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="articles-grid">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="article-card"
                onClick={() => navigate(`/blog/${post.slug}`)}
                data-cursor="pointer"
              >
                <div className="article-media">
                  <img src={post.image} alt={post.title} className="article-img" loading="lazy" />
                  <span className="article-category-tag">{post.category}</span>
                </div>

                <div className="article-body">
                  <div className="article-meta-row">
                    <span><Calendar size={13} /> {post.date}</span>
                    <span><Clock size={13} /> {post.readTime}</span>
                  </div>

                  <h3 className="article-card-title">{post.title}</h3>
                  <p className="article-card-excerpt">{post.excerpt}</p>

                  <div className="article-card-author">
                    <img src={post.author.avatar} alt={post.author.name} className="author-avatar-sm" />
                    <span>{post.author.name}</span>
                  </div>
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
