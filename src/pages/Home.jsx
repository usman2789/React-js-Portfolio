import React from 'react';

import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import SkillsComponent from '../components/Skills';
import HomePagdData from '../data/HomePagdData.json';
import SkillsData from '../data/SkillsData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
// import Blog from '../components/Blog';
// import BlogData from '../data/BlogData.json';

export default function Home() {
  const {
    hero,
    socialBtns,
   
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  
  const { skills } = SkillsData;
  
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
  
      <About data={about} />
      <SkillsComponent data={skills} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      {/* <Blog data={BlogData} /> */}
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
