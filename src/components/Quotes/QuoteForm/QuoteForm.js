import React, { Fragment, useRef, useState } from 'react';
import { Prompt, useHistory } from 'react-router';
import Card from '../../UI/Card/Card';
import classes from './QuoteForm.module.css';

const QuoteForm = props => {

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

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const addedQuote = {
            id: Math.random(),
            author: authorRef.current.value,
            quote: quoteRef.current.value
        }

        console.log(addedQuote);

        history.push('/quotes');
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
                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input id='author' ref={authorRef} type='text'></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='quote'>Quote</label>
                        <textarea id='quote' rows='5' ref={quoteRef} type='text'></textarea>
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