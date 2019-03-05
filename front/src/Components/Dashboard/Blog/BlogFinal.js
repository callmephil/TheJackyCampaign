import React, { Component } from 'react'
import * as auth0Client from "../../../Utils/Auth/Auth";
import {BlogServices} from '../../../Services/BlogServices'

import { BlogCard } from './BlogCard';
// import { BlogEdit, BlogCard } from './BlogFinal';


export default class BlogFinal extends Component {
    constructor() {
    super();
        this.state = {
            editMode: false,
            isUpdate: false,
            blog_list: [],
            post_data: [],
            locations: []
        };

        this.blogService = new BlogServices();
    }
    toggleEditMode = () => {
        const editMode = !this.state.editMode;
        this.setState({ editMode });
    };

    toggleUpdateMode = () => {
        const isUpdate = !this.state.isUpdate;
        this.setState({ isUpdate });
    }

    componentDidMount() {
      // console.log();

      this.getBlogList();

      if (this.props.editMode)
          this.toggleEditMode();
      // if (this.props.location.pathname === "/admin/campaign") {
      //     this.setState({ editMode: true });
      //     return;
      //     }  
    }
    getBlogList = () => {
        // this.setState({ loading: true })
        // this.blogService.getPostList()
        // .then(data => this.setState({blog_posts: data, loading: false }))
        // .catch(err => this.setState({ error: err.message, loading: false }))
    }
    getPostContent = (id) => {
        console.log("This Got Triggered", id);
        this.setState({post_data: {
          imgsource:"img", 
          location:"north", 
          title:"Title", 
          description:"Blag", 
          content:"Blablah"}
        });
        this.toggleUpdateMode();
        // this.blogService.getPost(id).then(data => this.setState({blog_posts: data}));
    }
    createOrUpdatePost = ({props}) => {
        const { post_id, imgsource, location, title, description, content } = props;
        if (this.state.isUpdate)
        { 
          this.updateBlog();
          this.toggleUpdateMode();
        }
        else
          this.createBlog();
    }
    createPost = (props) => {
        // this.blogService.createPost()
    }
    updatePost = (props) => {
    // this.blogService.updatePost(1, {title: "This is a title omgdadsadasds", content: "This is a content2"}, this.state.blog_posts)
    // .then(data => console.log(data))
    // .then(
    //   // data => this.setState({blog_post:data})
    // .then(toast.success(`Updated`))
    }
    deletePost = (id) => {
        console.log("Deleting Post", id);
        // this.blogService.deletePost(id);
    }
    publishPost = (id) => {
      console.log("Publishing Post", id);
      // this.blogService.publishPost(id, true);
    }
    getLocations = async () => {
      // const data = await this.utils.getLocations();
      // this.setState({locations: data})
    }

  renderForm() {
    const { locations } = this.state.locations;
    const { imgsource, location, title, description, content } = this.state.post_data;
    console.log("DEBUGL2", imgsource, location, title, description, content);
    return (
      <form className="card" onSubmit={this.onSubmit} onReset={this.toggleUpdateMode}>
        <label htmlFor="form_title">Post Title</label>
        <input 
          id="form_title" 
          type="text" 
          name="blog_title_input" 
          placeholder="Title name..." 
          defaultValue = {title}
        />

        <label htmlFor="region">Region</label>
        <select id="region" name="blog_region_input" defaultValue = {location}>
          {locations ? locations.map((loc, i) => 
            <option key={i} value={loc.loc_id}>{loc.name}</option>
          ) : 
            <option value="0">unspecified</option>
          }
        </select>

        <label htmlFor="form_description">Description</label>
        <textarea id="form_description" 
          name="blog_description_input" 
          minLength="300" 
          maxLength="300" 
          placeholder="text for the card of 300 characters.." 
          style={{height:"100px"}}
          defaultValue={description}
        />

        <label htmlFor="form_content">Content</label>
        <textarea 
          id="form_content" 
          name="blog_content_input" 
          placeholder="Write something.." 
          style={{height:"400px"}}
          defaultValue={content}
        />

        <div>
          <label> Upload a thumbnail </label>
          <input 
          type="file" 
          name="blog_image_input" 
          defaultValue={imgsource}
          />
          <br/>
          <br/>
        </div>
        <input type="submit" value="Create/Update" />
        <input type="reset" value="cancel" className="button" />
      </form>
    );
  }
  onSubmit = evt => {
    // stop the page from refreshing
    evt.preventDefault();
    // target the form
    const form = evt.target;
    // extract the two inputs from the form
    const blog_title_input = form.blog_title_input;
    const blog_region_input = form.blog_region_input;
    const blog_description_input = form.blog_description_input;
    const blog_content_input = form.blog_content_input;
    const blog_image_input = form.blog_image_input;
    // extract the values
    const title = blog_title_input.value;
    const region = blog_region_input.value;
    const description = blog_description_input.value;
    const content = blog_content_input.value;
    const image = blog_image_input.files[0];
    // get the id and the update function from the props
    const { post_id } = this.props;
    // run the update contact function
    this.createOrUpdatePost({ post_id,  title, region, description, content, image });
  };
  renderViewMode() {
    const json = [
        {
        imgsource: "https://www.w3schools.com/howto/img_nature.jpg",
        location: "LOCATION",
        title: "This is a Title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
        date: "10/20/1994",
        commentLength: "39",
        post_id: "0",
    },
    {
        imgsource: "https://www.w3schools.com/w3images/fjords.jpg",
        location: "LOCATION",
        title: "This is a Title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
        date: "10/20/1994",
        commentLength: "39",
        post_id: "0",
    }]
    const { post_id, imgsource, location, title, description, content, date, author_id } = this.props;
    const isLoggedIn = auth0Client.isAuthenticated();
    const current_logged_in_user_id = isLoggedIn && auth0Client.getProfile().sub
    const is_author = author_id === current_logged_in_user_id
    return (
      <div className="section group">
        <BlogCard props={json[0]} 
        functions = {
          {
            delete: this.deletePost, 
            edit: this.getPostContent,
            publish: this.publishPost
          }
        }/>
        <BlogCard props = {json[1]} />
        {/* { imgsource && <img src={`//localhost:8080/images/${imgsource}`} alt={`the avatar of ${imgsource}`}/> }
        <span>
          {id} - {name}
        </span>
        { is_author && isLoggedIn ?
          <div>
              <button onClick={this.toggleEditMode} className="success">
                edit
              </button>
              <button onClick={() => deleteContact(id)} className="warning">
                x
              </button>
          </div>
        : false
        } */}
      </div>
    );
  };
  
  render() {
    const { editMode } = this.state;
    if (editMode) {
      return (
        <>
        {this.renderForm()}
        {this.renderViewMode()}
        </>
      )
    } else {
      return this.renderViewMode();
    }
  }
}