import React from 'react';
import '../Layout/Layout.css';
import './Card.css';

export const BlogForm = () => {
    return (
        <>
        </>
    );
};

export const BlogEdit = () => {
    return (
        <div className="col span_1_of_3">
      
      <div class="card">
        <h1>Card 1</h1>
        <p>Some text</p>
        <p>Some text</p>
      </div>
        </div>
    );
};

export const BlogCard = () => {
    return (
      <div className="col span_1_of_3">
        <div class="card">
        <img src="https://via.placeholder.com/375" alt="Avatar" style={{maxwith:"400px",height:"300px"}}/>
        <h1>This is a super title</h1>
        <p>Super Content</p>
        <p>Author : Phil Date : 10/20/94</p>
        <div class="clearfix">
            <button type="button" class="cancelbtn">Delete</button>
            <button type="button" class="editbtn">Edit</button>
            <button type="submit" class="publishbtn">Publish</button>
            </div>
      </div>
      </div>
    );
};