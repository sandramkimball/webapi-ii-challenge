import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import axios from 'axios';


const Posts = () => {

    useEffect(
        axios.get('localhost:4000/api/posts')
        .then(res=> {
            const posts = res;
            console.log('Supposed data?: ', posts)
        })
    )
    return (
        <div className='posts-container'>
            <h1>Do You Know Who Said This?</h1>
            <div className='post-cards-container'>
                {posts.map(post => {
                    <PostCard key={id} props={post}/>
                })                
                }
            </div>
        </div>
    )
}

export default Posts;