import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-container'>
            <h2 className='title-qna'>Question</h2>
            <hr />
            <div className='ans-container'>
                <div>
                    <h3>1. Difference between State and Props ?</h3>
                    <p>Ans:
                        Props make components reusable. And State cannot make components reusable. Props allow you to pass data from one component to other components as an argument.And State holds information about the components.
                    </p>
                </div>
                <br />
                <div>
                    <h3>2. How Does useSate() Work ?</h3>
                    <p>Ans:
                        You create a functional component and throw some React hook at it that tracks state, can also update
                    </p>
                </div>
                <br />
                <div>
                    <h3>3. What can use effect do other than load data?</h3>
                    <p>Ans:
                        If we pass in the prop variable to the array in the 2nd argument of useEffect , the callback that we pass into the 1st argument will run as the prop changes.
                    </p>
                </div>
                <br />
                <div>
                    <h3>4. How Does React Work ?</h3>
                    <p>Ans:
                        React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;