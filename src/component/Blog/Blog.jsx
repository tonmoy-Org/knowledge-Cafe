import React, { useState } from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = (props) => {
    const { id, img, profile, author, date, blog, read } = props.blog;
    const handleMarkRead = props.handleMarkRead;
    const handleMarkTime = props.handleMarkTime;

    const [count, setCount] = useState([]);

    const handleClick = () => {
        setCount(count + 1);
        if (count > 0) {
            toast("You Added Multiple Bookmark !!");
        }
    };

    return (
        <div className='container-data' key={id}>
            <img src={img} alt="" />
            <div>
                <div className='author'>
                    <img src={profile} alt="" />
                    <div className='info-author'>
                        <div>
                            <p className='author-title'>{author}</p>
                            <small>{date} <span>(4 Days ago)</span></small>
                        </div>
                        <div>
                            <small>{read} min read
                                <button className="bookmark-icon"
                                    onClick={() => {
                                        handleClick();
                                        handleMarkRead(props.blog);
                                    }}>
                                    <FontAwesomeIcon className='icon' icon={faBookmark} />
                                </button>
                                <ToastContainer />
                            </small>
                        </div>
                    </div>
                </div>
                <p className='blog-title'>{blog}</p>
                <small className='hash'>#beginners   #programming </small>
            </div>
            <button onClick={() => handleMarkTime(props.blog)} className='read-btn'>Mark as read</button>
        </div>
    );
};

export default Blog;