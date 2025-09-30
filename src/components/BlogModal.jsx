import React from 'react';
import { Icon } from '@iconify/react';

export default function BlogModal({ blog, onClose }) {
  return (
    <div className="mfp-wrap">
      <div className="mfp-container">
        <div className="mfp-bg" onClick={onClose}></div>
        <div className="mfp-content">
          <button type="button" className="mfp-close" onClick={onClose}>×</button>
          <div className="px-modal blog-modal">
            <div className="blog-modal-content">
              <div className="blog-header">
                <img src={blog.image} alt={blog.title} className="blog-banner" />
                <div className="blog-meta">
                  <span><Icon icon="bi:calendar4" /> {blog.date}</span>
                  <span><Icon icon="bi:clock" /> {blog.readTime}</span>
                  <span className="blog-category"><Icon icon="bi:tag" /> {blog.category}</span>
                </div>
                <h2>{blog.title}</h2>
              </div>
              <div className="blog-body">
                <div className="blog-author">
                  <img src={blog.author.avatar} alt={blog.author.name} />
                  <span>{blog.author.name}</span>
                </div>
                <div className="blog-content">
                  {blog.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}