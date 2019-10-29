import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import Comments from './Comments';


const Posts = () => {
    const [postData, setPostsData] = useState([]);
    const [commentsData, setCommentsData] = useState([]);
    const [commentID, setID] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:4000/api/posts')
        .then(res=> {
            setPostsData(res.data);
            console.log('Data Delivery:', postData)
        })
        .catch(err=> {
            console.log('ALL HAS FAILED!', err);
        })
    }, [postData.length])

    useEffect( ()=> {
        axios.get(`http://localhost:4000/api/posts/${commentID}/comments`)
        .then(res=> {
            setCommentsData(res.data);
            console.log('Data Delivery:', commentsData)
        })
        .catch(err=> {
            console.log('ALL HAS FAILED!', err);
        })
    }, [commentsData.length])

    const handleClick = e =>{
        // const post.id = [e.target.value]
        setID(`${e.target.value}`)
    }

    return (
        <div>
            <h1>Do You Know Who Said This?</h1>
            <div className='pg-container'>
                <div className='pst-container'>
                {postData.map(post => (
                    <PostCard key={post.id} value={post.id} title={post.title} onClick={handleClick}/>
                ))}
                </div>  
                <div className = 'comments'>
                    <h3>Comments</h3>
                    {commentsData.map(comment=> (
                        <Comments key={comment.id} text={comment.text}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts;