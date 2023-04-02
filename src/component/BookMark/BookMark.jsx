import React from 'react';
import './BookMark.css';

const BookMark = ({bookMark}) => {
    return (
        <div className='container-bookmark'>
          <h2 className='book-mark'>Bookmarked Blogs: {bookMark.length}</h2>
          {bookMark.map(blog => (
            <p className='blog'key={blog.id}>{blog.blog}</p>
          ))}
        </div>
      );
    };

export default BookMark;