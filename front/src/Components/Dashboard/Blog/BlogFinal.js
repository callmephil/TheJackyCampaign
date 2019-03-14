import React, { Component } from 'react'
import * as auth0Client from "../../../Utils/Auth/Auth";
import { BlogServices } from '../../../Services/BlogServices'
import { BlogForm, BlogCard } from './BlogCard';


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
        this.setState({ isUpdate })
    }

    componentDidMount() {
      this.getBlogList();

      if (this.props.editMode)
          this.toggleEditMode();
      // if (this.props.location.pathname === "/admin/campaign") {
      //     this.setState({ editMode: true });
      //     return;
      //     }  

      this.setState({locations: [{
        id: 0,
        name: "unspecified"
      },
      {
        id: 1,
        name: "north"
      },
      {
        id: 2,
        name: "south"
      },
      {
        id: 3,
        name: "west"
      },
      {
        id: 4,
        name: "east"
      }]}
      );
    }

    getBlogList = () => {
        this.setState({ loading: true })
        this.blogService.getPostList()
        .then(data => this.setState(
        { 
          blog_list: data, 
          loading: false 
        }))

        .catch(err => this.setState({ error: err.message, loading: false }))
    }

    getPostContent = (id) => {
        this.blogService.getPost(id)
        .then(data => this.setState({post_data: data}))
        .then(console.log(this.state.post_data))
        .catch(e => console.log(e));
        this.toggleUpdateMode();
    }
    createOrUpdatePost = (props) => {
        const { post_id } = this.state.post_data;
        // console.log(props);
        if (this.state.isUpdate)
        { 
          this.updateBlog();
          this.toggleUpdateMode();
          // Update State with new data.
        }
        else
        {
          this.createPost(props);
        }
    }
    createPost = (props) => {
      const { imgsource, location_id, title, description, content } = props;
      this.blogService.createPost({imgsource, location_id, title, description, content});
    }
    updatePost = (props) => {
    // this.blogService.updatePost(1, {title: "This is a title omgdadsadasds", content: "This is a content2"}, this.state.blog_posts)
    // .then(data => console.log(data))
    // .then(
    //   // data => this.setState({blog_post:data})
    // .then(toast.success(`Updated`))
    }
    deletePost = (id) => {
        this.blogService.deletePost(id);
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
    const { post_id, location_id, title, description, content } = this.state.post_data;
    return (
        <BlogForm 
          locations={this.state.locations}
          isUpdate={this.state.isUpdate}
          onSubmit={this.onSubmit}
          onEditCancel={this.onEditCancel}
          post_id={post_id}
          location_id={location_id}
          title={title}
          description={description}
          content={content}
        />

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
    const location_id = blog_region_input.value;
    const description = blog_description_input.value;
    const content = blog_content_input.value;
    const imgsource = blog_image_input.files[0].name;
    console.log(imgsource);
    // run the update contact function
    this.createOrUpdatePost({ imgsource, location_id, title, description, content });
  };
  
  onEditCancel = evt => {
    evt.preventDefault();
    const form = evt.target;
    const blog_description_input = form.blog_description_input;
    const blog_content_input = form.blog_content_input;
    const blog_image_input = form.blog_image_input;

    if (this.state.isUpdate)
    {
      this.setState({ post_data: [] });
      this.toggleUpdateMode();
    }
    // ok no it's not gonna happen like that..
    blog_description_input.value = "";
    blog_content_input.value = "";
    blog_image_input.value = "";
    // Do better things...
  }

  renderViewMode(isDashboard = false) {
    console.log(this.state.blog_list);
    return (
      <div className="layout-container"> 
      <div className="layout-section group">
      { this.state.blog_list.map((data, index) =>
      isDashboard ? 
        <BlogCard key={index} 
        props = {data}
        functions = {
          {
          delete: this.deletePost,
          edit: this.getPostContent,
          publish: this.publishPost
          }
        }
        /> 
        :
        <BlogCard key={index} props = {data} />
      )}

        
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
      </div>
    );
  };
  
  render() {
    const editMode  = this.state.editMode;
    const isLoggedIn = auth0Client.isAuthenticated();
    if (editMode) {
      return (
        <>
        {this.renderForm()}
        {this.renderViewMode(true)}
        </>
      )
    } else {
      return this.renderViewMode();
    }
  }
}