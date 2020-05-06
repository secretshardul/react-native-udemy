import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const blogPost =state.find((post) => {
        return post.id === id;
    });

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={async (title, content) => {
                //edit values
                await editBlogPost(id, title, content);
                navigation.navigate('Index');
            }}
        />
    );
}

export default EditScreen;
