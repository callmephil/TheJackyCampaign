import React, {Component} from 'react';
import { BlogServices } from '../../../Services/BlogServices';

class Blog extends Component
{
  constructor() {
    super();


    this.blogService = new BlogServices();
  }
  // title text DEFAULT '',
	// content blob DEFAULT '',
	// date datetime DEFAULT 0,
	// author_id text DEFAUTL ''
  componentDidMount() {
    this.blogService.createPost({title:"This is a title", content:"This is a content", date:'10/20/1994', author_id:'Phil'})
    .then(x => console.log(x));
  }
  render(){
    return (
      <div className="container">
      </div>
    )
  }
}

export default Blog;