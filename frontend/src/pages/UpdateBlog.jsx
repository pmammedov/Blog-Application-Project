import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogForm from '../components/blogform/BlogForm'
import { AuthContextProv } from '../context/AuthContext'
import { BlogDataContext } from '../context/BlogContext'

const UpdateBlog = () => {
    const { state } = useLocation()
    const [updateBlog, setUpdateBlog] = useState(state.blogDetail)
    const { currentUser } = useContext(AuthContextProv)
    const { updatePost, getCategories } = useContext(BlogDataContext)
    const navigate = useNavigate()
    const submitButtonInnerContent = 'Update Blog Post';
    const handleChange = (e) => {
        // e.preventDefault()
        const { name, value } = e.target
        setUpdateBlog({ ...updateBlog, [name]: value })
        console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(state.blogDetail.slug, navigate, updateBlog)
        console.log(updateBlog);
        setUpdateBlog("")
    }
    console.log(updateBlog);
    console.log(state)
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <Grid width={'100%'} marginTop={20} spacing={0} justifyContent={'center'} alignItems={'center'} minHeight={'calc(100vh - 600px)'} sx={{ paddingX: { xs: 2, sm: 10 } }}>
            <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} posts={updateBlog} buttonInnerText={submitButtonInnerContent} />
        </Grid>
    )
}

export default UpdateBlog