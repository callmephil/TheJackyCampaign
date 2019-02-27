import React, {Component} from 'react';
import { BlogServices } from '../../../Services/BlogServices';
import { toast } from 'react-toastify';

const BlogCard = (props) => {
  const { title, content, date, author } = props;
  return (

    <div className="section"> 
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
    // this.blogService.createPost({title:"This is a title 2", content:"This is a content2 ", date:'10/21/1994', author_id:'Phil'})
    // .then(data => this.setState({blog_post:[...this.state.blog_posts, data]}))
    // .then(toast.success(`Created`)); // @Todo Do this in AxiosUtils ?

    this.blogService.getPostList().then(data => this.setState({blog_posts: data}));
    //this.blogService.getPost(1).then(data => this.setState({blog_posts: data}));
    // this.blogService.deletePost(0);

    // this.blogService.updatePost(1, {title: "This is a title omgdadsadasds", content: "This is a content2"}, this.state.blog_posts)
    // .then(data => console.log(data))
    // .then(
    //   // data => this.setState({blog_post:data}).then(
    //   toast.success(`Updated`)
    // )
  }


  // <BlogCard 
  // title={blah.title}
  // content={blah.title}
  // date={blah.date}
  // author={blah.author_id + ' ' + blah.post_id}
  // />

  render(){
    const blah = this.state.blog_posts;
    return (
      <div style={{width:"50%"}}>
      {/* // <div className="container"> */}
      {
        blah.map((val, i) =>
          <BlogCard key={i} 
              title={val.title}
              content={val.content}
              date={val.date}
              author={val.author_id + ' ' + val.post_id}
          />
        )
      }
      {/* // </div> */}
      </div>
    )
  }
}

export default Blog;