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
          <img src={profilePhoto} alt="Dev Photo" className="profile-photo" width="150" height="150" />
        </div>
        <div className="comic-cloud">
          <div className="about-text">
            <h2>About Me <i className="fa-sharp fa-solid fa-comment-dots"></i></h2>
            <p>Welcome to the home of the web's next superhero, minus the cape but with plenty of bytes! Ready to dive into the labyrinth of <span className="keyword">loops</span>, <span className="keyword">conditions</span>, and <span className="keyword">semicolons</span>? Well, you're in for a treat.</p>
            <br />
            <p>First thing's first, I'm a language savant—no, not the Rosetta Stone type. I juggle <span className="keyword">JavaScript</span>, <span className="keyword">PHP</span>, <span className="keyword">Python</span>, <span className="keyword">Angular</span>, and <span className="keyword">React</span> like a circus performer, all while styling in <span className="keyword">HTML</span>, <span className="keyword">CSS</span>, and <span className="keyword">SASS</span>. I've also dabbled in <span className="keyword">Java Spring</span>, and I'm no stranger to database management with <span className="keyword">Oracle</span>, <span className="keyword">MySQL</span>, and <span className="keyword">PL/SQL</span>. I'm the Leonardo da Vinci of the web canvas, but with better hair!</p>
            <br />
            <p>Now, let's talk <span className="keyword">optimization</span>. I've squeezed the life out of more <span className="keyword">images</span> than a juicer on a health kick. <span className="keyword">Lazy loading</span>? It's more like my lifestyle than just a coding technique. I've even mastered <span className="keyword">SEO</span> to the point where Google might as well send me a Christmas card. And I don't mean to brag, but I've spiked <span className="keyword">sales</span> by a cool 15% with my coding tricks at <span className="keyword">Sporting Life</span>. Take that, Wall Street!</p>
            <br />
            <p>But wait, there's more! At <span className="keyword">daVinci Retail</span>, I was all about crafting the perfect user experience. I single-handedly improved website accessibility, turning intricate mazes into pleasant strolls in the digital park. If you've ever been lost in a website, you'll appreciate my <span className="keyword">alt-texts</span> and intuitive designs.</p>
            <br />
            <p>As for my time at <span className="keyword">CallCN</span>, I was the one-man army behind both the frontend and backend. I created RESTful APIs that were so smooth, they made butter look chunky. My prowess with <span className="keyword">PHPAuth</span> made our web platforms as secure as Fort Knox.</p>
            <br />
            <p>When I joined the team at <span className="keyword">Sporting Life</span>, I didn't just join; I revolutionized. I brought in <span className="keyword">Figma</span> as the primary design tool, elevating our version control game and facilitating real-time collaboration like never before. I was the maestro, conducting an orchestra of codes, databases, and user interfaces.</p>
            <br />
            <p>On the education front, I honed my skills at <span className="keyword">Seneca College of Applied Arts And Technology</span> in Toronto. Imagine Hogwarts, but instead of spells, we had <span className="keyword">algorithms</span> and <span className="keyword">Git</span>. I further expanded my horizons at the <span className="keyword">Ufa State Aviation Technical University</span> in Russia, diving deep into the intricacies of <span className="keyword">Computer Science</span>. I even picked up a bit of <span className="keyword">C</span>, <span className="keyword">C++</span>, and <span className="keyword">C#</span> along the way.</p>
            <br />
            <p>So, are you ready for a journey through my digital universe? Grab your mouse and keyboard, and let's make those dream projects a reality—one semicolon at a time!</p>



          </div>
          <img src={floatingAstronauftImage} alt="Your Image Description" className="aligned-image" width="110" height="110" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
