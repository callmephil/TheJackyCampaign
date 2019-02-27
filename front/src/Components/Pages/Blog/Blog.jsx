import React, {Component} from 'react';
import { BlogServices } from '../../../Services/BlogServices';

const BlogCard = (props) => {
  console.log("meh", props);
  const { title, content, date, author } = props;
  return (
      <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">@{author}</p>
        </div>
      </div>

      <div className="content">
        {content}
        <br />
        <time datetime="2016-1-1">{date}</time>
      </div>
    </div>
  </div>
  );
}


class Blog extends Component
{
  constructor() {
    super();
    this.state = {
      blog_posts: [],
    };

// zoomaal crowdfunding leb ?

    this.blogService = new BlogServices();
  }
  // title text DEFAULT '',
	// content blob DEFAULT '',
	// date datetime DEFAULT 0,
	// author_id text DEFAUTL ''
  componentDidMount() {
    this.blogService.createPost({title:"This is a title 2", content:"This is a content2 ", date:'10/21/1994', author_id:'Phil'})
    .then(data => this.setState({blog_post:[...this.state.blog_posts, data]}));
    this.blogService.getPostList().then(data => this.setState({blog_posts: data}));
    this.blogService.deletePost(5).then(this.setState(this.state.blog_posts)); // Reload ?
  }
  render(){
    const blah = this.state.blog_posts;
    return (
      <div style={{width:"50%"}}>
      {/* // <div className="container"> */}
      {

        blah.map((val, i) =>
        <div className="section"> 
          <BlogCard key={i} 
              title={val.title}
              content={val.content}
              date={val.date}
              author={val.author_id + ' ' + val.post_id}
          />
        </div>
        )
      }
      {/* // </div> */}
      </div>
    )
  }
}

export default Blog;