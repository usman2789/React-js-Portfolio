import { Icon } from '@iconify/react';
import React, { useState, useMemo } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

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

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;

  const handelProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(!modal);
  };

  const settings = useMemo(() => ({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  }), []);

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <div
            className="project-wrapper"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => (
                <div key={index}>
                  <div className="project-box">
                    <div className="project-media">
                      <img src={item.thumbUrl} alt={item.title} loading="lazy" />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, 'image')}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="text">
                        <h5>{item.title}</h5>
                        <span>{item.subTitle}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handelProjectDetails(item, 'details')}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(false)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(false)}
              >
                ×
              </button>
              {modalType === 'image' ? (
                <img src={modalData.thumbUrl} alt={modalData.title} loading="lazy" />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
