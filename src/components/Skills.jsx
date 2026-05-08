import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import SectionHeading from './SectionHeading';

export default function Skills({ data }) {
  const { sectionHeading, skillCategories } = data;
  const defaultCategory = skillCategories[0]?.key || '';
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  useEffect(() => {
    if (!skillCategories.some((category) => category.key === activeCategory)) {
      setActiveCategory(defaultCategory);
    }
  }, [activeCategory, defaultCategory, skillCategories]);

  const activeSkills =
    skillCategories.find((category) => category.key === activeCategory)?.skills || [];

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
                {skillCategories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.key)}
                    type="button"
                  >
                    <span
                      className="filter-btn-dot"
                      style={{ backgroundColor: category.accent }}
                    />
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          <div className="row gy-4">
            {activeSkills.map((skill, index) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={skill.name}>
                <div
                  className="skill-card"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`skill-icon ${skill.logoVariant ? `skill-icon-${skill.logoVariant}` : ''}`}
                  >
                    <div className="skill-icon-shell">
                      {skill.icon ? (
                        <Icon
                          className="skill-icon-glyph"
                          icon={skill.icon}
                          style={skill.iconColor ? { color: skill.iconColor } : undefined}
                        />
                      ) : (
                        <img src={skill.src} alt={skill.name} />
                      )}
                    </div>
                  </div>
                  <div className="skill-info">
                    <h6 className="skill-name">{skill.name}</h6>
                    {skill.note ? <p className="skill-note">{skill.note}</p> : null}
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
