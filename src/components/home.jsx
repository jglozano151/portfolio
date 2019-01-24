import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Profile from './icons/download.png';
import Preview2 from './screencaps/previewimage.png';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import {NavLink} from 'react-router-dom';
import background from './screencaps/background.jpg'; 
import sfpic from './screencaps/sfpic.png'; 
import mongodblogo from './screencaps/mongodblogo.svg'; 
import htmllogo from './screencaps/htmllogo.svg'; 
import reactlogo from './screencaps/reactlogo.svg'; 
import javascriptlogo from './screencaps/javascriptlogo.svg'; 
import Preview1 from './screencaps/chesspreview.png'; 
import Preview3 from './screencaps/docpreview.png'; 

let logos = [
  reactlogo, mongodblogo, htmllogo, javascriptlogo
]

const projects = [
  {
    title: 'Socket Chess',
    description: 'Real-time chess games with Socket.io',
    image: Preview1,
    github: "https://github.com/jglozano151/socketchess",
    live: "https://impartial-finger.surge.sh"
  },
  {
    title: 'Stock Analysis',
    description: 'Stock scanner and alerts for day traders',
    image: Preview2,
    github: "https://github.com/jglozano151/stockanalysis",
    live: "https://stockanalysisdemo.herokuapp.com"
  },
  {
    title: 'Document Editor',
    description: 'Simple collaborative document editor',
    image: Preview3,
    github: "https://github.com/jglozano151/googleDocsClone"
  }
]

const messages = [
  ["Objective", "Obtain a full-time software engineering position, preferably " + 
  "a role focused around front end development."],
  ["Background", "I am a recent graduate of Columbia University's engineering school (B.S. " +
  "Biomedial Engineering, '18). I became more interested in software development " +
  "during my time there, and learned JavaScript on my own junior year, along " +
  "with HTML and CSS to build simple web pages. Since then, I've expanded my skillset to focus on the " + 
  "development of full-stack Javascript applications."],
  ["Experience", "In the summer of 2017, I worked as an intern at Munoz Engineering, applying my new" +
  " skills to create a new version of the company website. I attended the" +
  " Horizons School of Technology in San Francisco in the summer of 2018" +
  ", where we learned how to create full-stack JavaScript apps. The" +
  " technologies we became familiar with included Mongoose, NodeJS, React" +
  ", React Native, and learned as well how to use Redux and React Router. \n" +
  "Since finishing the bootcamp, I've been working on continuing the projects" +
  " that I built and have started on new ones, as well as improving my understanding" +
  " of data structures and algorithms."],
  ["Skillset", "Proficient in HTML/CSS and JavaScript: ReactJS, React Native, NodeJS. Working knowledge of SQL and Python"],
  ["This Portfolio", "This website is a showcase of my smaller React projects that were " +
  "made while learning the framework, and three larger full-stack Javascript apps." +
  " Each larger project shown below has links to the live app on Heroku and the source code" +
  " on GitHub."],
  ["Small Projects"]
]

const Home = () => {
  return (
  <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style = {{textAlign: 'center'}}>
      <Typography variant = "display2" style = {{color: '#232323', textShadow: '2px black', marginTop: 90, marginBottom: 25}}> <b> Joseph Lozano </b> </Typography>
      <Typography variant = "h5" style = {{color: '#232323', marginBottom: 25}}> Software Engineer | New York City, NY </Typography>
    </div>
    {/* Objective/Background section */}
    <div style = {{display: 'flex', margin: 25, maxWidth: 1200}}> 
      <div>
          <Avatar alt = "Joseph Lozano" src = {Profile} style = {{width: 200, height: 250, margin: 50}}/>
      </div>
      <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 15}}> 
        <Typography variant = "title" style = {{marginBottom: 15, fontFamily: 'Oxygen'}}> {messages[0][0]} </Typography> 
        <Typography variant = "subheading" style = {{fontFamily: 'Roboto', marginBottom: 30}}> {messages[0][1]} </Typography> 
        <Typography variant = "title" style = {{marginBottom: 15, fontFamily: 'Oxygen'}}> {messages[1][0]} </Typography> 
        <Typography variant = "subheading" style = {{fontFamily: 'Roboto'}}> {messages[1][1]} </Typography>
      </div>
    </div> 
    {/* Experience Section */}
    <div style = {{backgroundColor: '#ededed', width: '98%'}}> 
      <div style = {{display: 'flex', maxWidth: 1700}}> 
        <img src = {sfpic} style = {{margin: 15}}/> 
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 15}}> 
          <Typography variant = "title" style = {{marginBottom: 15, fontFamily: 'Oxygen'}}> {messages[2][0]} </Typography> 
          <Typography variant = "subheading" style = {{fontFamily: 'Roboto', textAlign: 'justify', marginBottom: 20}}> {messages[2][1]} </Typography> 
          <div style = {{marginTop: 25}}> 
            <Typography variant = "title" style = {{fontFamily: 'Oxygen', marginBottom: 15}}> Small Projects/Games: </Typography> 
          </div> 
        </div> 
      </div> 
    </div> 
    {/* Skillset Section */}
    <Typography variant = "h5" style = {{margin: 25, fontFamily: 'Oxygen'}}> {messages[3][0]} </Typography> 
    <Typography variant = "subheading" style = {{fontFamily: 'Roboto'}}> {messages[3][1]} </Typography>
    <div style = {{margin: 25, display: 'flex', flexDirection: 'row'}}> 
      {logos.map((logo) => (
        <img width = "100px" height = "100px" src = {logo} style = {{margin: 20}}/> 
      ))}
    </div> 
    <div style = {{width: '98%', backgroundColor: '#ededed', marginBottom: 25}}> 
      <Typography variant = "h5" style = {{margin: 25, color: '#232323', fontFamily: 'Oxygen', textAlign: 'center'}}>
        Main Projects 
      </Typography>
      <div style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '100%'}}>
        {projects.map((project) => (
          <Card style = {{margin: 30, maxWidth: 400}} >
            <CardActionArea>
            <CardMedia component = "img"  image = {project.image} style = {{height: 275}}/>
              <CardContent>
                <Typography gutterBottom variant = "h5" component = "h2"> {project.title} </Typography>
                <Typography component = "p"> {project.description} </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href = {project.github} style = {{textDecoration: 'none'}}>
                <Button size = "small" color = "primary"> Source Code </Button>
              </a>
              <a href = {project.live} style = {{textDecoration: 'none'}}> 
                <Button size = "small" color = "primary"> Live Project </Button>
              </a> 
            </CardActions>
          </Card>
        ))}
      </div>
      <Typography style = {{marginBottom: 25, textAlign: 'center'}} variant = "subheading"> ... and this website! </Typography> 
    </div> 
  </div>

  )
}

export default Home
