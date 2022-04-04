import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q1: What is context api</h1>
                <p>Context api is a way to send props from components to components without using props drilling. We can send variables ,functions as well as values to any components. People use context api for state managements.The content one wants to share to other components context should be declare in that parent component. Context are also used in changing to dark theme ,light theme changing , showing the website in different languages.</p>
            </div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q2:What is Semantic tag</h1>
                <p>Semantag are html tags with meaning or to be recognized easily.Other developer and search engines can crawl the website and collect data easily through semantic tags. Sematics tags organises the content of the website.A user can easily navigate .We </p>
            </div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q3:Difference betweenInline Block and Inline Block Elements</h1>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;