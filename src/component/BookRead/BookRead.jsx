import React from 'react';
import './BookRead.css';

const BookRead = ({bookRead}) => {
    let time = 0;
    for(const read of bookRead){
        time = time + read.read;
    }
    return (
        <div className='mark-read'>
            <h2 className='time'>Spent time on read: {time} min</h2>
        </div>
    );
};

export default BookRead;