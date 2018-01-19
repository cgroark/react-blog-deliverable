import React, { Component } from 'react';
import Author from "./Author.js";
import Comment from "./Comment.js";
import './App.css';
import index from "./index";

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      moodPoints: 1
    } 
 }
	increaseMood(e){
  		if(this.state.moodPoints<=9){
  			this.setState({moodPoints: this.state.moodPoints + 1});
  		}else {
      		this.setState({moodPoints: 1});
  		}
	}
  	
  	render() {

    const allPosts = this.props.post.map(p => {
        return <div>
           <h1 className="Title">{p.title}</h1>
          <Author author={p.author} />
          <p className="Post-intro">
            {p.content}
          </p>
          <h2>Comments</h2>
            <Comment comments={p.comments} />
          </div>
    });
  	return(
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        <h3>On a Scale from 1-10, this is how I feel</h3>
        <p>Current Moood: {this.state.moodPoints}</p>
        
        <button onClick={(e) => this.increaseMood(e) }></button>
        {allPosts}
        <hr />
        <p>Note, at this stage, we are only rendering ONE post with ONE comment!</p>
      </div>
  	)  
  	}
}

export default Post;


