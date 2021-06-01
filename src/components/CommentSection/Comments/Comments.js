import React, { useCallback, useEffect, useState } from 'react';
import useHttp from '../../../hooks/useHttp';
import { getAllComments } from '../../../lib/api';
import Spinner from '../../UI/Spinner/Spinner';
import CommentItems from '../CommentItems/CommentItems';
import NewCommentForm from '../NewCommentForm/NewCommentForm';
import classes from './Comments.module.css';

const Comments = props => {

    const [isAddingComment, setIsAddingComment] = useState(false);

    const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

    const { quoteId } = props;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    }

    const commentAddHandler = useCallback(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    let comments;

    if (status === 'pending') {
        comments = (
            <div>
                <Spinner />
            </div>
        );
    }

    if (status === 'completed' && loadedComments && loadedComments.length > 0) {
        comments = (
            <CommentItems comments={loadedComments} />
        );
    }

    if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comments = (
            <h3>No comments were added yet!</h3>
        );
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add Comment
                </button>)}
            {isAddingComment && (
                <NewCommentForm qId={quoteId} onAddedComment={commentAddHandler} />
            )}
            {comments}
        </section>
    );
}

export default Comments;