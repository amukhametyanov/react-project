import React, { useState, useEffect, useRef } from 'react';
import devSkillsImage from '../images/about me astronaut 1.png';  // Import the image
import './Skills.css'; // Import the CSS

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsContainer = useRef(null);
  const activeTabRef = useRef(null);

  const moveIndicator = (oldTab, newTab) => {
    if (!tabsContainer.current) return;

    const newTabPosition = oldTab.compareDocumentPosition(newTab);
    const newTabWidth = newTab.offsetWidth / tabsContainer.current.offsetWidth;
    let transitionWidth;

    if (newTabPosition === 4) {
      transitionWidth = newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft;
    } else {
      transitionWidth = oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft;
      tabsContainer.current.style.setProperty('--_left', `${newTab.offsetLeft}px`);
    }

    tabsContainer.current.style.setProperty('--_width', `${transitionWidth / tabsContainer.current.offsetWidth}`);

    setTimeout(() => {
      tabsContainer.current.style.setProperty('--_left', `${newTab.offsetLeft}px`);
      tabsContainer.current.style.setProperty('--_width', `${newTabWidth}`);
    }, 240);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const newTab = activeTabRef.current;
      if (newTab && tabsContainer.current) {
        const newTabWidth = newTab.offsetWidth / tabsContainer.current.offsetWidth;
        tabsContainer.current.style.setProperty('--_left', `${newTab.offsetLeft}px`);
        tabsContainer.current.style.setProperty('--_width', `${newTabWidth}`);
      }
    };
  
    // Assign the default active tab to activeTabRef.current here
    if (tabsContainer.current) {
      const defaultActiveTab = tabsContainer.current.getElementsByClassName('tab')[activeTab];
      activeTabRef.current = defaultActiveTab;
      updateIndicator();
    }
  
    window.addEventListener('resize', updateIndicator);
  
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, []);

  const changeTab = (index, tabElement) => {
    const oldTab = activeTabRef.current;
    setActiveTab(index);
    activeTabRef.current = tabElement;

    if (oldTab) {
      moveIndicator(oldTab, tabElement);
    }
  };

  return (
    <section className="skills">
        <div id="skills"></div>
        <div className="section-name">
            <h3 className="skills-heading">
            <span>Skills</span> <span className="for-icon"><i className="fa-sharp fa-solid fa-screwdriver-wrench animate__animated"></i></span>
            </h3>
            <img src={devSkillsImage} alt="Dev Skills" className="skills-avatar" height="100" width="100" />
        </div>

        <div className="tabs flex-wrap" ref={tabsContainer}>
            <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={(e) => changeTab(0, e.currentTarget)}>Front-End</button>
            <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={(e) => changeTab(1, e.currentTarget)}>Back-End</button>
            <button className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={(e) => changeTab(2, e.currentTarget)}>Software</button>
        </div>

        <div className="content">
            <div id="frontEnd" className={`tabcontent ${activeTab === 0 ? 'active' : ''}`}>
                    {/* You can map over your data to generate these lists dynamically */}
                    <ul>
                    <li>
                        <div className="skill-card">
                                <span className="skill-name">HTML, CSS</span>
                                <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-100"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                    </svg>
                                </div>
                        </div>
                        
                        </li>
            
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">JavaScript (ES6+)</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-90"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="90, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
            
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">React.js and React Hooks</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-90"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="90, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
            
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Vue.js</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-85"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="85, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
            
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">SASS/SCSS</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-100"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
                        
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Webpack</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-85"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="85, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Responsive Design</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-100"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
                    
                        <li>
                        <div className="skill-card">
                                <span className="skill-name">PWAs</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-90"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="90, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">WebAssembly</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-90"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="90, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">GraphQL</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-90"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="90, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Web Accessibility</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-100"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Tailwind CSS</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-75"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="75, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>

                        <li>
                        <div className="skill-card">
                                <span className="skill-name">Performance optimization</span>
                                <div className="skill-percentage">
                                <svg viewBox="0 0 36 36" className="circular-chart">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100"
                                    ></path>
                                    <path className="circle circle-100"
                                        d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeDasharray="100, 100" 
                                        strokeLinecap="round"
                                    ></path>
                                    <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                </svg>
                                </div>
                        </div>
                        
                        </li>
                    
                    </ul>
            </div>
            <div id="backEnd" className={`tabcontent ${activeTab === 1 ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Laravel</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Composer</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-75"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="75, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Node.js with Express.js</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-85"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="85, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                    </svg>
                                    </div>
                            </div>
                        
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">RESTful API design</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-85"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="85, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Docker and Kubernetes</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-75"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="75, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                        
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Serverless architecture</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-80"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="80, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">80%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">.NET Core</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-100"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                    
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">NoSQL databases</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Redis</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-75"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="75, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">WebSockets</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-80"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="80, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">80%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Java Spring Boot</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-75"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="75, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Python</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-85"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="85, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Flask and Django</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-95"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="95, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">95%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                    
                    </ul>
            </div>
            <div id="fullStack" className={`tabcontent ${activeTab === 2 ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">C</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">C++</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">C#</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                        
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Objective-C</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-80"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="80, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">80%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Python</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                        
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">DevOps practices</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-75"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="75, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">75%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Cloud platforms</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-90"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="90, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">90%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                    
                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Git, Bitbucket</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-100"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Swift</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-80"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="80, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">80%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">AWS</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-85"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="85, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">85%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Azure</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-80"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="80, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">80%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Agile</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-95"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="95, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">95%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>

                        <li>
                            <div className="skill-card">
                                    <span className="skill-name">Asana, Jira, Slack</span>
                                    <div className="skill-percentage">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#333"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100"
                                        ></path>
                                        <path className="circle circle-100"
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeDasharray="100, 100" 
                                            strokeLinecap="round"
                                        ></path>
                                        <text x="18" y="19" textAnchor="middle" fill="#fff" fontSize="11px" dy=".3em">100%</text>
                                    </svg>
                                    </div>
                            </div>
                            
                        </li>
                    
                    </ul>
            </div>
        </div>
    </section>


  );
};

export default Skills;
