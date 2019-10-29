import React from 'react';

const Comments = (props) => {
    return (
        <div className = 'comment'>
            <p>{props.text}</p>
        </div>
    )
}

export default Comments;