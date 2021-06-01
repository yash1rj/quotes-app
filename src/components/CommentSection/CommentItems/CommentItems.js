import React from 'react';
import classes from './CommentItems.module.css';

const CommentItems = props => {
    return (
        <ul className={classes.comments}>
            {props.comments.map((comment) => (
                <li key={comment.id} className={classes.item}>
                    <p>{comment.text}</p>
                </li>
            ))}
        </ul>
    );
}

export default CommentItems;