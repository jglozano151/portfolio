import React, { Component } from 'react';
import Card from './components/Card.js'; 
import './App.css';
import mongodblogo from './components/screencaps/mongodblogo.svg'; 
import htmllogo from './components/icons/express-logo.jpg'; 
import reactlogo from './components/screencaps/reactlogo.svg'; 
import javascriptlogo from './components/screencaps/javascriptlogo.svg'; 
import background from './static/compbackground.jpg'; 
import Experience from './Experience.js'; 
import profile from './components/screencaps/profile.png'; 
import github from './components/icons/GitHub_Logo.png'; 
import linkedinlogo from './components/screencaps/linkedinlogo.png'; 
import stacklogo from './components/icons/stacklogo.jpg'; 
import codepenlogo from './components/icons/codepenlogo.png'; 
import {Link, animateScroll as scroll} from 'react-scroll'; 
import Particles from 'react-particles-js';
import arrows from './components/icons/arrows.png'; 

//https://mycolor.space/?hex=%233B3A44&sub=1

let logos = [
  {image: mongodblogo, text: 'MongoDB'},
  {image: htmllogo, text: 'Express'}, 
  {image: reactlogo, text: 'ReactJS'},
  {image: javascriptlogo, text: 'NodeJS'}
]

let languages = [
  "JavaScript (NodeJS)", 
  "ReactJS + Redux", 
  "HTML5 & CSS3", 
  "Git", 
  "Jest", 
  "Python", 
  "Java", 
]

let navbar = ['home', 'about', 'projects', 'contact']; 

class App extends Component {
  render() {
    return ([
      <div class = "nav-bar text-light"> 
        <div class = "container pt-2 pb-2">
          {navbar.map(item => ([
            <div class = "mr-5 btn text-light nav-bar-item"> 
            <Link activeClass = "active" to = {item} spy = {true} smooth = {true}
            offset = {-50} duration = {700}> 
              {item} 
            </Link>
            </div> 
          ]))}
          <div style = {{clear: 'both'}}/> 
        </div> 
      </div>,
      <div id = "home" class="landing">
        <h1 class="tracking-in-expand mb-4"> Joseph Lozano </h1>
        <h4 class="tracking-in-expand mb-4"> Full-Stack Software Engineer | New York, NY </h4>
        <Link activeClass = "active" to = {"about"} spy = {true} smooth = {true} offset = {-50} duration = {700}> 
          <img class = "arrow" src = {arrows} height = "65px" width = "40" style = {{background: '#ededed', borderRadius: '5em', opacity: 0.8}}/> 
        </Link> 
      </div>,
      <div id = "about" class = "text-light pb-5" style = {{background: '#518071'}}> 
        <div class = "container"> 
          <h2 class = "pt-5 text-light" style = {{textAlign: 'center'}}> About Me </h2>
          <hr class = "my-4 mb-5"/> 
          <div style = {{display: 'flex', flexDirection: 'column'}}> 
            {/* Picture & logos */}
            <div class = "mb-5 pb-5" style = {{display: 'flex', justifyContent: 'space-between'}}> 
              <img class = "mr-5 profile" src = {profile}/> 
              <div class = "ml-5" style = {{float: 'right'}}> 
                <p class = "mb-5" style = {{fontSize: 18, maxWidth: 800, textAlign: 'justify'}}> I'm a full-stack Javascript developer based in New York City. 
                  I have a true passion for making great-looking user interfaces, developing web applications, 
                  and creating animations. My main skillset is app development with the MERN stack.
                </p> 
                <div style = {{display: 'flex', justifyContent: 'space-between'}}> 
                  {logos.map((logo) => (
                    <div> 
                      <img width = "100px" height = "100px" src = {logo.image}/>
                      <p class = "mt-3" style = {{textAlign: 'center', fontSize: 18}}> {logo.text} </p> 
                    </div> 
                  ))}
                </div> 
              </div> 
            </div> 
            {/* Education and such */}
            <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} class = ""> 
              <div> 
                <p style = {{fontSize: 20}} class = "mb-4"> Education & Work Experience </p> 
                {experience.map(exp => (
                  <Experience heading = {exp.heading} subheading = {exp.subheading} icon = {exp.icon}/> 
                ))}
                </div>
              <div> 
                <p class = "mb-4" style = {{fontSize: 20}}> Technologies & Languages Known </p> 
                <ul> 
                  {languages.map(lang => (
                    <li> <p style = {{fontSize: 18}}> {lang} </p> </li> 
                  ))}
                </ul>  
              </div> 
            </div>  
          </div> 
        </div> 
        <div style = {{clear: 'both'}}/> 
      </div>,
      <div id = "projects" style = {{background: '#608a95'}} class = "text-light"> 
        <div class = "container">
          <h2 class = "pt-5" style = {{textAlign: 'center'}}> Original Projects </h2>
          <hr class = "my-4 container"/> 
          <div class = "p-3"> 
            {cards.map(card => (
              <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '3em', float: 'left'}}> 
                <Card title = {card.title} description = {card.description} source = {card.source}/> 
                <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
                  <ul> 
                    <li> <p style = {{fontSize: 18}}> {card.list1} </p> </li> 
                    <li> <p style = {{fontSize: 18}}> {card.list2} </p> </li> 
                    <li> <p style = {{fontSize: 18}}> {card.list3} </p> </li> 
                  </ul> 
                  <div style = {{display: 'flex', justifyContent: 'center'}}> 
                    {card.github ? <a href = {card.github} class = "button mr-3 text-light"> Source Code </a> : null} 
                    <a href = {card.link} class = "button text-light"> Live Project </a>  
                  </div> 
                </div> 
              </div> 
            ))}
          </div> 
          <div style = {{clear: 'both'}}/>
        </div> 
      </div>,
      <div id = "contact" class = "p-5 text-light" style = {{background: '#3b3a44'}}>
        <div class = "container"> 
          <h4 class = "mb-3"> Contact Me/Find Me At </h4> 
          <div>
            <div class = "mr-4"> 
              <p style = {{fontSize: 16}}> jglozano151@gmail.com </p>
            </div> 
            <a href = "https://github.com/jglozano151" class = "mr-3" style = {{float: 'left'}}> 
              <img src = {github} height = "40" width = "110"/>  
            </a> 
            <a href = "https://www.linkedin.com/in/joseph-lozano-651900132/" class = "mr-4" style = {{float: 'left'}}> 
              <img src = {linkedinlogo} height = "40" width = "40"/> 
            </a> 
            <a href = "https://stackoverflow.com/users/10962558/joseph-lozano?tab=profile" style = {{float: 'left'}} class = "mr-4"> 
              <img src = {stacklogo} height = "40" width = "40" style = {{borderRadius: '5em'}}/> 
            </a> 
            <a href = "https://codepen.io/jglozano151/" style = {{float: 'left'}}> 
              <img src = {codepenlogo} height = "40" width = "40" style = {{borderRadius: '5em'}}/> 
            </a> 
            <div style = {{clear: 'both'}}/> 
          </div>
        </div> 
      </div>  
    ]);
  }
}

const cards = [
  {
    title: 'IVC Trading', 
    source: require('./static/ivc.jpg'), 
    description: 'A platform for alerting day traders to potential stock trading opportunities. Website rendered server-side with nextJS, alert feed powered by a Python web-scraping program.',
    link: 'https://ivctrading.herokuapp.com',
    list1: 'Role: Full-stack JavaScript developer', 
    list2: 'Maintains front-end of site and server code to handle data stream', 
    list3: 'Technologies: Python, NodeJS, React (NextJS), MongoDB, Express' 
  }, 
  {
    title: 'Document Editor', 
    description: "Real-time document editor in React. Uses Socket.io to emit changes across multiple browsers so collaborators can see each other's changes.",
    source: require('./components/screencaps/docpreview.png'),
    github: 'https://github.com/jglozano151/googleDocsClone',
    link: 'https://docsclone1.herokuapp.com',
    list1: 'Role: Creator, fullstack developer', 
    list2: 'Created app with NodeJS, React, and MongoDB', 
    list3: 'Styled original theme with CSS' 
  }, 
  {
    title: 'React Chess', 
    description: 'Chess games in-browser between two players. Makes use of logic written in JavaScript to calculate legal moves. Moves update in real time.',
    source: require('./components/screencaps/chesspreview.png'),
    github: 'https://github.com/jglozano151/socketchess',
    link: 'https://reactchess251.herokuapp.com',
    list1: 'Role: Creator, fullstack developer', 
    list2: 'Designed app with original theme in ReactJS', 
    list3: 'Utilized socket.io for real-time games to be played'
  }
]

const experience = [
  {
    heading: 'Columbia Engineering', 
    subheading: 'Bachelor of Science, 2018', 
    icon: require('./components/screencaps/columbialogo.png'), 
    summary: [
      'Learned the fundamentals of programming while pursuing a bioengineering degree.',
      'Relevant coursework in Python development, MATLAB data analysis, and basic algorithms.'
    ]
  },
  {
    heading: 'Munoz Engineering', 
    subheading: 'Intern, Summer 2017', 
    icon: require('./components/screencaps/munozlogo.png'), 
    summary: [
      'Developed front-end design skill while completing a project to redesign the company website.',
      'Created layouts with HTML/CSS and animations with JavaScript and jQuery.'
    ]
  },
  {
    heading: 'Horizons School of Technology', 
    subheading: 'Coding Bootcamp Student, 2018', 
    icon: require('./components/screencaps/horizonslogo.png'), 
    summary: [
      'Developed multiple MERN stack applications for mobile and desktop.',
      'Learned the fundamentals of data structures and algorithms.',
      'Participated in a hackathon to develop a mobile app in under 24 hours.',
      
    ]
  }
]


export default App;
