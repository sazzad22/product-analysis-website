import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q1: What is context api</h1>
                <p>Context api is a way to send props from components to components without using props drilling. We can send variables ,functions as well as values to any components. People use context api for state managements.The content that one wants to share to other components, context should be declare in that parent component. Context are also used in changing to dark theme ,light theme changing , showing the website in different languages.</p>
            </div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q2:What is Semantic tag</h1>
                <p>Semantic tag are html tags with meaning or to be recognized easily.Other developer and search engines can crawl the website and collect data easily through semantic tags. Sematic tags organizes the content of the website.A user can easily navigate .We can easily understand where can we expect a certain type of information on a website.Example: article, section, header, footer etc </p>
            </div>
            <div className='m-10 p-10 rounded-md shadow-md'>
                <h1>Q3:Difference betweenInline Block and Inline Block Elements</h1>
                <p>Html elements can be of three type of display state,which are inline , block and inline-block. 
                    <br />
                    inline Elements can take the space provided by the tag in the same line. Line a span element within a p tag.Inline elements are provided with the same height and margins of the parent tag.
                    <br />
                    But Block elements takes the whole width of the page. A block element mentioned next to a block element won't stay next to each other in the same line,rather they will take separate blocks.
                    <br />
                    On the other hand,Inline-block elements can have unique height and width for itself while inside a line with fixed height and weight.
                    
                </p>
            </div>
        </div>
    );
};

export default Blogs;