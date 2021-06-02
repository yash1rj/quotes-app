import React, { useEffect, useRef} from 'react';
import useHttp from '../../../hooks/useHttp';
import Card from '../../UI/Card/Card';
import classes from './NewCommentForm.module.css';
import { addComment } from '../../../lib/api';
import Spinner from '../../UI/Spinner/Spinner';

const NewCommentForm = props => {

    const { sendRequest, error, status } = useHttp(addComment);

    const commentRef = useRef();

    const { onAddedComment } = props;

    useEffect(() => {
        if(status === 'completed' && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        let inputComment = commentRef.current.value;
        if (inputComment.trim() !== '') {
            sendRequest({ commentData: {text: inputComment}, quoteId: props.qId});
            event.target.reset();
        }
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                {status === 'pending' && (<div className={classes.loading}>
                    <Spinner />
                </div>)}
                <div className={classes.control}>
                    <label htmlFor='comment'>Your Comment</label>
                    <textarea required id='comment' rows='4' ref={commentRef} type='text'></textarea>
                </div>
                <div className={classes.actions}>
                    <button className='btn'>Add Comment</button>
                </div>
            </form>
        </Card>
    );
};

export default NewCommentForm;