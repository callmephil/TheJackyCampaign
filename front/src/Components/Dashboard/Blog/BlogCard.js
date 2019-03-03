import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../Layout/Layout.css';
import './Form.css';
import './Card.css';

export const BlogForm = () => {
    return (
        <>
        </>
    );
};

export const BlogEdit = () => {
    return (
      <div className="card">
      <form>
        <label htmlFor="ftitle">Post Title</label>
        <input type="text" id="ftitle" name="title" placeholder="Title name..." />

        <label htmlFor="region">Region</label>
        <select id="region" name="region">
          <option value="australia">North</option>
          <option value="canada">Center</option>
          <option value="usa">South</option>
        </select>

        <label htmlFor="Description">Description</label>
        <textarea id="Description" name="Description" maxlength="300" minlength="300" placeholder="text for the card maximum 300 characters.." style={{height:"100px"}}></textarea>

        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" placeholder="Write something.." style={{height:"400px"}}></textarea>

        <div>
          <label> Upload a thumbnail </label>
          <input type="file" name="myFile"/>
          <br/>
          <br/>
        </div>
        <button type="submit" value="Submit"> Create </button>
      </form>
      </div>
    );
};

export const BlogCard = ({ props }) => {
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
            <p className="description" Style="text-indent: 25px;">
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
      {/* { editmode === true ? */}
      <div className="clearfix">
      <br />
      <br />
          <button type="button" className="cancelbtn font-size-16">Delete</button>
          <button type="button" className="editbtn font-size-16">Edit</button>
          <button type="button" className="publishbtn font-size-16">Publish</button>
      </div>
      {/* : <> </> */}
      {/* } */}
    </div>
    );
};