import React, { Component } from 'react';
import{
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-router-dom'
import Author from "./Author.js";
import Comment from "./Comment.js";
import Movie from "./Movie.js";
import Post from './Main.js';
import Food from "./Food.js";
import About from "./About.js";
import './App.css';

var posts = [{
  title: 'Dinos rule!',
  content: 'We are so neat',
  author: 'T-Rex; King of Dinos',
  comments: ['Eh, dinos are okay', 'Yeah, go dinos']
}, {
  title: 'So offended',
  content: 'I am from way, way longer ago than these young dinos. Jurassic rules, cretaceous sucks!',
  author: 'Stegasaurus',
  comments: ['Cool it', 'Who cares, bro', 'Triassic or nothing!']
}];

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Link to='/Main'>This goes to the Main page </Link>
        <Link to='/Movie'>Top Film Directors </Link>
        <Link to='/Food'>Noodle Page</Link>
        <Link to='/About'>Abouts Me</Link>

          <Route exact path="/Main" component= {() => <Post post={posts} /> } />
          <Route exact path="/Movie" component={Movie} />
          <Route exact path="/Food" component={Food} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
