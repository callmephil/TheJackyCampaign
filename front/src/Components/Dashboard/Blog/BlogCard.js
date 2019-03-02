import React from 'react';
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
        <label for="ftitle">Post Title</label>
        <input type="text" id="ftitle" name="title" placeholder="Title name..." />

        <label for="region">Region</label>
        <select id="region" name="region">
          <option value="australia">North</option>
          <option value="canada">Center</option>
          <option value="usa">South</option>
        </select>

        <label for="content">Content</label>
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

export const BlogCard = () => {
    return (
      <div className="col span_1_of_3">
      <div className="card">
          <div className="thumbnail">
            <img src="https://www.w3schools.com/howto/img_nature.jpg" />
          </div>
          <div className="post-card-content">
            <div className="location">
                <h1>Lebanon - Tarshish</h1>
            </div>
            <h1 className="title">City Lights in New York</h1>
            <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            {/* <!-- This is shit --!> */}
            <div>
                <span className="fa fa-clock-o fa-align-text-center"> 
                  <i className="iii"> 10/20/1994 </i> 
                </span>
                <span className="fa fa-comments fa-align-text-center"> 
                  <i className="iii"> 39 comments </i> 
                </span>
                <Link className="fa fa-long-arrow-alt-right fa-align-text-center sublime" to="/about">
                Read More</Link>
                <br />
                <br />
            </div>

          </div>
      </div>
      <div className="clearfix">
          <button type="button" className="cancelbtn">Delete</button>
          <button type="button" className="editbtn">Edit</button>
          <button type="button" className="publishbtn">Publish</button>
      </div>
    </div>
    );
};