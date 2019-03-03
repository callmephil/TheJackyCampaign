import React, { Component } from 'react';
import {BlogEdit, BlogCard } from './BlogCard';

import '../Layout/Layout.css'

class Blogpanel extends Component {
    render() {
        const json = [
            {
            imgsource: "https://www.w3schools.com/howto/img_nature.jpg",
            location: "LOCATION",
            title: "This is a Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
            date: "10/20/1994",
            commentLength: "39",
            post_id: "0"
        },
        {
            imgsource: "https://www.w3schools.com/w3images/fjords.jpg",
            location: "LOCATION",
            title: "This is a Title",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
            date: "10/20/1994",
            commentLength: "39",
            post_id: "0"
        }]
        return (
          <>
          <div className="section group">
              <BlogEdit />
              <br />
               <BlogCard props={json[0]}/>
               <BlogCard props={json[1]}/>
               <BlogCard props={json[0]}/>
               <BlogCard props={json[1]}/>
               <BlogCard props={json[1]}/>
               <BlogCard props={json[0]}/>
            </div>
            </>
        );
    }
}

export default Blogpanel;