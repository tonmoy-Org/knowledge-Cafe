import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';
import BookMark from '../BookMark/BookMark';
import BookRead from '../BookRead/BookRead';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [bookRead, setBookRead] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
     
    
    const handleMarkRead = (blog) => {
        setBookMark(newSate => [...newSate, blog]);
    }
    const handleMarkTime = (blog) => {
        setBookRead(newState => [...newState, blog]);
    }

    return (
        <div className='blog-container'>
            <div className='content'>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            handleMarkRead={handleMarkRead}
                            handleMarkTime={handleMarkTime}
                        ></Blog>)
                }
            </div>
            <div className='container-bookMark'>
                <div className='bookRead'>
                    {
                        <BookRead bookRead={bookRead}></BookRead>
                    }
                </div>
                <div className='summary'>
                    {
                        <BookMark bookMark={bookMark}></BookMark>
                    }
                </div>

            </div>
        </div>
    );
};

export default Blogs;