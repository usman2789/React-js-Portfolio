import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function Skills({ data }) {
  const { sectionHeading, skillCategories } = data;
  const [activeCategory, setActiveCategory] = useState('languages');

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        
        {/* Category Filter Buttons */}
        <div className="skills-filter-tabs">
          <div className="row justify-content-center mb-5">
            <div className="col-12">
              <div className="filter-buttons d-flex flex-wrap justify-content-center gap-3">
                <button
                  className={`filter-btn ${activeCategory === 'languages' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('languages')}
                >
                  🔴 Languages
                </button>
                <button
                  className={`filter-btn ${activeCategory === 'frameworks' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('frameworks')}
                >
                  🔵 Frameworks & Libraries
                </button>
                <button
                  className={`filter-btn ${activeCategory === 'platforms' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('platforms')}
                >
                  🟣 Platforms & Tools
                </button>
                <button
                  className={`filter-btn ${activeCategory === 'other' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('other')}
                >
                  🟠 Other Skills
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          <div className="row gy-4">
            {skillCategories[activeCategory]?.map((skill, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div
                  className="skill-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  <div className="skill-icon">
                    <img src={skill.src} alt={skill.alt} />
                  </div>
                  <div className="skill-info">
                    <h6 className="skill-name">{skill.name}</h6>
                    <div className="skill-level">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}