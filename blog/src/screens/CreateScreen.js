import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            initialValues={{ title: '', content: '' }}
            onSubmit={async (title, content) => {
                await addBlogPost(title, content);
                navigation.navigate('Index');
            }}
        />
    );
};

export default CreateScreen;
