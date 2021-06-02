import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Prompt, useHistory } from 'react-router';
import useHttp from '../../../hooks/useHttp';
import { addQuote } from '../../../lib/api';
import Card from '../../UI/Card/Card';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {

    const { sendRequest, status } = useHttp(addQuote);

    const history = useHistory();

    const [isEntering, setIsEntering] = useState(false);

    const authorRef = useRef();
    const quoteRef = useRef();

    const finsihedEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    useEffect(() => {
        if(status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const addedQuote = {
            author: authorRef.current.value,
            quote: quoteRef.current.value
        }

        sendRequest(addedQuote);

    };

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />

            <Card>
                <form className={classes.form} onFocus={formFocusedHandler} onSubmit={formSubmitHandler}>
                    {status === 'pending' && (<div className={classes.loading}>
                        <Spinner />
                    </div>)}
                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input required id='author' ref={authorRef} type='text'></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='quote'>Quote</label>
                        <textarea required id='quote' rows='5' ref={quoteRef} type='text'></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finsihedEnteringHandler} className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}

export default QuoteForm;