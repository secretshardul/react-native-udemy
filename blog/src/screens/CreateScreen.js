import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        // Default values used for initialValue prop
        <BlogPostForm
            onSubmit={async (title, content) => {
                await addBlogPost(title, content);
                navigation.navigate('Index');
            }}
        />
    );
};

export default CreateScreen;
