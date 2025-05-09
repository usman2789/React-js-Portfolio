import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow next" onClick={onClick}>
      <Icon icon="bi:arrow-right" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow prev" onClick={onClick}>
      <Icon icon="bi:arrow-left" />
    </button>
  );
};

export default function Blog({ data }) {
  const { sectionHeading, blogs } = data;
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  const desktopSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const mobileSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="section gray-bg" id="blog">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="blog-wrapper">
          {/* Desktop View - Slider */}
          <div className="d-none d-lg-block">
            <Slider {...desktopSettings} className="slider-gap-24">
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <div className="px-2">
                    <BlogCard data={blog} onBlogClick={() => handleBlogClick(blog)} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Mobile View - Slider */}
          <div className="d-block d-lg-none">
            <Slider {...mobileSettings} className="slider-gap-24">
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <div className="px-2">
                    <BlogCard data={blog} onBlogClick={() => handleBlogClick(blog)} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={handleCloseModal} />
      )}
    </section>
  );
}