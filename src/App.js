import React, { Component } from 'react';
import Card from './components/Card.js'; 
import './App.css';
import mongodblogo from './components/screencaps/mongodblogo.svg'; 
import htmllogo from './components/screencaps/htmllogo.svg'; 
import reactlogo from './components/screencaps/reactlogo.svg'; 
import javascriptlogo from './components/screencaps/javascriptlogo.svg'; 

let logos = [
  reactlogo, mongodblogo, htmllogo, javascriptlogo
]

class App extends Component {
  constructor(props) {
    super(props)
    this.projects = React.createRef(); 
  }
  state = {
    atTop: true
  }
  render() {
    const appBarColor = this.state.atTop ? '#a3d7f7' : '#dbdbdb';  
    return ([
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class = "container"> 
          <a class="navbar-brand" href="#"> JL Portfolio </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div> 
      </nav>,
      <div class="jumbotron" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div class = "container row"> 
          <div class = "col-1"/> 
          <div class = "col-5"> 
            <img src = {require("./components/icons/download.png")}/> 
          </div> 
          <div class = "col-6" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
            <div> 
              <h1 class="display-5 tracking-in-expand"> Joseph Lozano </h1>
              <p class="lead tracking-in-expand"> Software Engineer | Front-End </p>
              <hr class="my-4"/>
              <div class = "row container mb-4"> 
                <a href = "https://github.com/jglozano151"> <img src = {require('./components/icons/GitHub_Logo.png')} height = "30" width = "75"/> </a> 
                <a href = "https://www.linkedin.com/in/joseph-lozano-651900132/"> <img src = {require('./components/icons/linkedinlogo.svg')} height = "30" width = "45"/> </a> 
              </div> 
              <div class = "row"> 
                <a class="btn btn-outline-primary ml-3" style = {{borderRadius: 25}} onClick = {() => window.scrollTo(0, this.projects.current.offsetTop)} role="button"> Project Portfolio </a>
              </div> 
            </div> 
          </div> 
        </div> 
      </div>,
      <div class = "container" style = {{width: '100%'}}> 
        <h3 class = "lead" style = {{fontSize: 24}}> Background </h3> 
        <hr class = "my-4"/> 
        <p style = {{fontSize: 16}}> I am a recent engineering school graduate seeking employment in front-end development. 
        I am very familiar with ReactJS and React Native, and have programming experience in Python. Below is a summary 
        of my background in engineering that led me to become a web developer. </p> 
        {/* Columbia Engineering */}
        <div class = "row mt-4 p-3"> 
          <div class = "col-5 p-3"> 
            <div class = "row" style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
              <div class = "mr-3"> 
                <h4> Columbia University </h4> 
                <i> B.S. Biomedical Engineering, '18 </i> 
              </div> 
              <img class = "mr-3" src = {require('./components/screencaps/columbialogo.png')} height = "50" width = "50"/> 
            </div> 
            <p class = "mt-3 text-justify"> While there, I learned data analysis in MATLAB, programming in Python, and took various 
              technical engineering courses. Additionally, I completed a 
              capstone design project that involved working with physicians to engineer a new solution for 
              diagnosing tuberculosis in children in the developing world. </p> 
          </div> 
          <div class = "col-1"/> 
          <div class = "col-6"> 
            <div class = "row"> 
              <div class = "col-6" style = {{height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
                <div class = "border" style = {{width: '100%', borderRadius: 500, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h4> 2014 - 2018 </h4> 
                </div>  
              </div> 
            </div> 
          </div>  
        </div> 
        {/* Munoz Internship */}
        <div class = "row p-3"> 
          <div class = "col-5"> 
            <div class = "row"> 
              <div class = "col-6"/> 
              <div class = "col-6" style = {{height: 250, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}> 
                <div class = "border" style = {{width: '100%', borderRadius: 500, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h4> Summer 2017  </h4> 
                </div>  
              </div> 
            </div> 
          </div>  
          <div class = "col-1"/> 
          <div class = "col-6 p-3"> 
            <h4 class = "mt-3"> Munoz Engineering, DPC </h4> 
            <i> Intern </i> 
            <p class = "mt-3 text-justify"> As an intern at Munoz, I developed my front-end design skills 
              completing a project to redesign the company website. Learned and used HTML/CSS, and created 
              simple animations with JavaScript and jQuery. </p> 
          </div> 
        </div>
        {/* Horizons School of Technology */}
        <div class = "row p-3"> 
          <div class = "col-5 p-3"> 
            <div class = "row" style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
              <div class = "mr-3"> 
                <h4> Horizons School of Technology </h4> 
                <i> Bootcamp in San Francisco, CA </i> 
              </div> 
              <img class = "mr-3" src = {require('./components/screencaps/horizonslogo.png')} height = "50" width = "50"/> 
            </div> 
            <p class = "mt-3 text-justify"> Horizons School of Technology was based around teaching web development, 
              mainly in JavaScript. I worked both solo and collaboratively to design multiple projects in ReactJS and 
              React Native, some of which are live and also available on my GitHub. </p> 
          </div> 
          <div class = "col-1"/> 
          <div class = "col-6"> 
            <div class = "row"> 
              <div class = "col-6" style = {{height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
                <div class = "border" style = {{width: '100%', borderRadius: 500, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h4> Summer 2018 </h4> 
                </div>  
              </div> 
            </div> 
          </div>  
        </div> 
      </div>,
      <div class="jumbotron pt-4" style = {{display: 'flex', justifyContent: 'center'}}> 
        <div class = "container">  
          <h3 class = "lead" style = {{fontSize: 24}}> Skills </h3>
          <hr class = "my-4"/> 
          <div style = {{margin: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}> 
            {logos.map((logo) => (
              <img width = "100px" height = "100px" src = {logo} style = {{margin: 20}}/> 
            ))}
          </div> 
          <div class = "row"> 
            <p class = "col-6 text-justify p-3" style = {{fontSize: 18}}> My main skillset involves developing MERN stack applications (MongoDB, 
            Express, ReactJS, NodeJS) and I am familiar with many modules that are used by each of these. </p> 
            <div class = "col-6 p-3"> 
              <p style = {{fontSize: 18}}> Other Technologies/Languages I've Used </p> 
              <ul> 
                <li> Python </li> 
                <li> Socket.io </li> 
                <li> React Native </li> 
                <li> PassportJS </li> 
                <li> Git & Github </li> 
                <li> Unit testing with Jasmine </li> 
              </ul> 
            </div> 
          </div> 
        </div>  
      </div>, 
      <div class = "container" ref = {this.projects}> 
        <h3 class = "lead" style = {{fontSize: 24}}> Main Projects </h3>
        <hr class = "my-4"/> 
        {cards.map(card => (
          <Card title = {card.title} description = {card.description} source = {card.source} link = {card.link}/> 
        ))}
      </div>,
      <div class = "bg-dark mt-4" style = {{width: '100%', height: 50}}/> 
    ]);
  }
}

const cards = [
  {
    title: 'IVC Trading', 
    source: require('./components/icons/IVC.png'), 
    description: 'A platform for alerting day traders to potential stock trading opportunities. Website rendered server-side with nextJS, alert feed powered by a Python web-scraping program.',
    link: 'https://ivctrading.herokuapp.com'
  }, 
  {
    title: 'Document Editor', 
    description: "Real-time document editor in React. Uses Socket.io to emit changes across multiple browsers so collaborators can see each other's changes.",
    source: require('./components/screencaps/docpreview.png'),
    link: 'https://docsclone1.herokuapp.com'
  }, 
  {
    title: 'React Chess', 
    description: 'Chess games in-browser between two players. Makes use of logic written in JavaScript to calculate legal moves. Moves update in real time.',
    source: require('./components/screencaps/chesspreview.png'),
    link: 'https://reactchess251.herokuapp.com'
  }
]


export default App;
