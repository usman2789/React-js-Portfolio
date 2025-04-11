import React from 'react';
import { Icon } from '@iconify/react';

export default function BlogCard({ data, onBlogClick }) {
  const { title, excerpt, category, date, readTime, image, author } = data;
  
  return (
    <div className="blog-card" 
         data-aos="fade-up" 
         data-aos-duration="1200"
         onClick={() => onBlogClick(data)}
         style={{ cursor: 'pointer' }}
    >
      <div className="blog-media">
        <img src={image} alt={title} />
        <span className="blog-category">{category}</span>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span><Icon icon="bi:calendar4" /> {date}</span>
          <span><Icon icon="bi:clock" /> {readTime}</span>
        </div>
        <h5>{title}</h5>
        <p>{excerpt}</p>
        <div className="blog-author">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </div>
    </div>
  );
}