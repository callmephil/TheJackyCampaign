import React, { Component } from 'react';
import {BlogEdit, BlogCard } from './BlogCard';

import '../Layout/Layout.css'

class Blogpanel extends Component {
    render() {
        return (
          <>
          <div class="section group">
              <BlogEdit />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
            </div>
            </>
        );
    }
}

export default Blogpanel;