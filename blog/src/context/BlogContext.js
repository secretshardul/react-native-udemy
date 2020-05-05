import React, { useState } from 'react';

const BlogContext = React.createContext();

// Provider contains values to be distributed
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    function addBlogPost() {
        setBlogPosts([
            ...blogPosts,
            { title: `Blog post #${blogPosts.length + 1}` }
        ]);
    }

    //children prop recieves <App />
    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
};

// Context allows components to access the provider
export default BlogContext;
