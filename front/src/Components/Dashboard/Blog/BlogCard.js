import React from 'react'
import { Link } from 'react-router-dom'

import '../Layout/Layout.css';
import './Form.css';
import './Card.css';

export const BlogForm = (props) => {
  // console.log("DEBUGL2", props);
  const { locations, isUpdate, onSubmit, onEditCancel, 
  post_id, location_id, title, description, content } = props;
  const buttonName = isUpdate ? "Update" : "Create";

  return (
    <form className="card" onSubmit={(evt)=> onSubmit(evt)} onReset={(evt)=> onEditCancel(evt)}>
      <label htmlFor="form_title">Post Title</label>
      <input 
        id="form_title" 
        type="text" 
        name="blog_title_input" 
        placeholder="Title name..." 
        defaultValue = {title}
      />

      <label htmlFor="region">Region</label>
      <select id="region" name="blog_region_input">
        {locations ? locations.map((loc, i) => 
          loc.id === location_id ? 
          <option selected key={i} value={loc.id}>{loc.name}</option>
          : 
          <option key={i} value={loc.id}>{loc.name}</option>
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
        value = {description}
      />

      <label htmlFor="form_content">Content</label>
      <textarea 
        id="form_content" 
        name="blog_content_input" 
        placeholder="Write something.." 
        style={{height:"400px"}}
        value = {content}
      />

      <div>
        <label> Upload a thumbnail </label>
        <input 
        type="file" 
        name="blog_image_input"
        />
        <br/>
        <br/>
      </div>

      <div> 
        <input type="submit" value={buttonName} />
        <input type="reset" value="cancel" className="button" />
      </div>
    </form>
  );
};

// @Todo getCorrect Data
export const BlogCard = ({ props, functions }) => {
    let { title, description, date, commentLength, post_id } = props;
    let imgsource = "https://www.w3schools.com/howto/img_nature.jpg";
    let location = "unspecified"
    commentLength = 72;
    return (
      <div className="layout-col span_1_of_3">
      <div className="card">  
          <div className="thumbnail">
            <img src= {imgsource}/>
          </div>
          <div className="post-card-content">
            <div className="location">
                <h1>{location}</h1>
            </div>
            <h1 className="title">{title}</h1>
            <p className="description" style={{textIndent: "25px"}}>
              {description}
            </p>

            {/* <!--- This is shit ---!> */}
            <br />
            <div>
                <span className="far fa-calendar-alt fa-align-text-center"> 
                  <i className="iii"> {date} </i> 
                </span>
                <span className="far fa-comments fa-align-text-center"> 
                  <i className="iii"> {commentLength} </i> 
                </span>
            </div>
            <br />
            <Link className="Link-Text readmorebtn" to={`/post/${post_id}`}>Read More</Link>
          </div>
      </div>
      {/* <!--- Edit Mode ---!> */}
      { functions && 
      <div className="clearfix">
      <br />
      <br />
          <button onClick={() => functions.delete(post_id)}  type="button" className="cancelbtn font-size-16">Delete</button>
          <button onClick={() => functions.edit(post_id)}    type="button" className="editbtn font-size-16">Edit</button>
          <button onClick={() => functions.publish(post_id)} type="button" className="publishbtn font-size-16">Publish</button>
      </div>
      }
    </div>
    );
};