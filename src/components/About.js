import React from 'react';
import './About.css';
import profilePhoto from '../images/profile-photo.jpg';  // Import the image
import floatingAstronauftImage from '../images/astronauft skills 1.png';  // Import the image

const AboutMe = () => {
  return (
    <section className="about">
      <div id="about-me"></div>
      <div className="about-container">
        <div className="photo-container">
          <img src={profilePhoto} alt="Dev Photo" className="profile-photo" />
        </div>
        <div className="comic-cloud">
          <div className="about-text">
            <h2>About Me <i className="fa-sharp fa-solid fa-comment-dots"></i></h2>
            <p>Hello and welcome to my digital abode! Now, you might be asking yourself, "Who is this coding maestro?" Well, sit tight, because you're in for a ride through the riveting world of web development, as narrated by yours truly.</p>
            <br />
            <p>First off, let's clear something up: I speak more languages than just English. I'm fluent in HTML, CSS, JavaScript, and even PHP, Python, Angular, and React. That's right, I'm the polyglot of programming, the Shakespeare of script, the — okay, I'll stop there.</p>
            <br />
            <p>You know how some people optimize their coffee intake for maximum productivity? Well, I optimize websites. I've compressed more images than you've taken selfies, and let's just say lazy loading isn't just my Sunday morning routine. My coding finesse has even boosted sales by 15% for my current gig. Not too shabby, right?</p>
            <br />
            <p>But hold on, there's more! Ever tried navigating a website that's about as accessible as a labyrinth guarded by a Minotaur? Not on my watch. I'm all about making the web a friendlier place, one alt-text at a time. And SEO? Let's just say if Google were a classroom, my websites would be the teacher's pets.</p>
            <br />
            <p>When I'm not busy being a remote warrior—mastering the art of coding in pajamas—I dabble in the fine arts of project management. Asana, Jira, Slack; you name it, I've "task-managed" it. Oh, did I mention that I thrive in Agile environments? Yep, I'm all about those sprints, and not just when I'm late for a meeting!</p>
            <br />
            <p>So, buckle up, surf through my portfolio, or drop me a line. Let's turn those dream projects into digital realities, one line of code at a time!</p>

          </div>
          <img src={floatingAstronauftImage} alt="Your Image Description" className="aligned-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
