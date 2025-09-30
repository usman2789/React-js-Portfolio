import React from 'react';
<<<<<<< HEAD
// import Brands from '../components/Brands';
=======
import Brands from '../components/Brands';
>>>>>>> dab37e8b3de98c2a4410f760ddde8814d1a692c5
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
<<<<<<< HEAD
import Skills from '../components/Skills';
import HomePagdData from '../data/HomePagdData.json';
import SkillsData from '../data/SkillsData.json';
=======
import HomePagdData from '../data/HomePagdData.json';
>>>>>>> dab37e8b3de98c2a4410f760ddde8814d1a692c5
import Experience from '../components/Experience';
import Contact from '../components/Contact';
// import Blog from '../components/Blog';
// import BlogData from '../data/BlogData.json';

export default function Home() {
  const {
    hero,
    socialBtns,
<<<<<<< HEAD
    // brands,
=======
    brands,
>>>>>>> dab37e8b3de98c2a4410f760ddde8814d1a692c5
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  
<<<<<<< HEAD
  const { skills } = SkillsData;
  
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      {/* <Brands data={brands} /> */}
       <About data={about} />
      <Skills data={skills} />
      <Projects data={projects} />
     
=======
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
>>>>>>> dab37e8b3de98c2a4410f760ddde8814d1a692c5
      <Service data={service} />
      <Experience data={experience} />
      {/* <Blog data={BlogData} /> */}
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
