import React, { useEffect } from 'react';
import codespirationAstronauft from '../images/skills astronaut 1.png';  // Import the image
import './Codespiration.css';
/* global Swiper */


const Codespiration = () => {
  useEffect(() => {

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
      });

      
  }, []);

  return (
    <section className="codespiration">
    
            <div className="section-name">
            <h3 className="skills-heading"><span>Codespiration</span> <span className="for-icon"><i className="fa fa-lightbulb-o animate__animated"></i></span></h3>
            <img src={codespirationAstronauft} alt="Codespiration" className="codespirationCoffee" height="100" width="100" />
            </div>

            
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                <div className="swiper-slide first-slide">
                    <div className="smart-quote">
                    <p className="quote">"Talk is cheap. Show me the code."</p>
                    <p className="author">Linus Torvalds</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</p>
                    <p className="author">Martin Fowler</p>
                    </div>
                    <div className="bg-img"></div>
                
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"The function of good software is to make the complex appear to be simple."</p>
                    <p className="author">Grady Booch</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"The best way to predict the future is to invent it."</p>
                    <p className="author">Alan Kay</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"A good programmer is someone who always looks both ways before crossing a one-way street."</p>
                    <p className="author">Doug Linder</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"The best thing about a boolean is even if you are wrong, you are only off by a bit."</p>
                    <p className="author">Anonymous</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"Programs must be written for people to read, and only incidentally for machines to execute."</p>
                    <p className="author">Harold Abelson</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."</p>
                    <p className="author">Muhammad Waseem</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                <div className="swiper-slide">
                    <div className="smart-quote">
                    <p className="quote">"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."</p>
                    <p className="author">Mosher’s Law of Software Engineering</p>
                    </div>
                    <div className="bg-img"></div>
                </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
    </section>
  );
};

export default Codespiration;
