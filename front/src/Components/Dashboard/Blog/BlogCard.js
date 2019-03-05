import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../Layout/Layout.css';
import './Form.css';
import './Card.css';


// <input
//   type="text"
//   placeholder="name"
//   name="contact_name_input"
//   defaultValue={name}
// />
// <input
//   type="text"
//   placeholder="email"
//   name="contact_email_input"
//   defaultValue={email}
// />
// <input
//   type="file"
//   name="contact_image_input"
// />
// <div>
//   <input type="submit" value="ok" />
//   <input type="reset" value="cancel" className="button" />
// </div>
// </form>

export const BlogEdit = (fonSubmit, toggleEditMode, imgsource, location, title, description, content) => {
    // const {  } = props;
    console.log("DEBUG", location);
    console.log(fonSubmit, toggleEditMode, imgsource, location , title, description, content);
    return (
      <form className="card" onSubmit={fonSubmit} onReset={toggleEditMode}>
        <label htmlFor="form_title">Post Title</label>
        <input 
          id="form_title" 
          type="text" 
          name="blog_title_input" 
          placeholder="Title name..." 
          defaultValue= {title}
        />

        <label htmlFor="region">Region</label>
        <select id="region" name="blog_region_input">
          {/* {location.map((loc, i) =>  */}
            <option value="0">North</option>
          {/* )} */}
        </select>

        <label htmlFor="form_description">Description</label>
        <textarea id="form_description" 
          name="blog_description_input" 
          maxLength="300" 
          minLength="300" 
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
};

export const BlogCard = ({ props, functions }) => {
    const { imgsource, location, title, description, date, commentLength, post_id } = props;
    return (
      <div className="col span_1_of_3">
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