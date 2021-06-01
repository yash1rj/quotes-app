import React, { Fragment } from 'react';
import { Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../../Comments/Comments';
import HighlightedQuote from '../HighlightedQuote/HighlightedQuote';
import NoQuotesFound from '../NoQuotesFound/NoQuotesFound';
import classes from './QuoteDetail.module.css';

const DUMMY_LIST = [
    {
        id: 'q1',
        author: 'yash',
        quote: 'lorem ispsum text'
    },
    {
        id: 'q2',
        author: 'max',
        quote: 'qnasj lorem ispsum text'
    },
    {
        id: 'q3',
        author: 'steve',
        quote: 'qwuefgkd lorem ispsum text'
    },
    {
        id: 'q4',
        author: 'kristie',
        quote: 'test sdksds lorem ispsum text'
    }
];

const QuoteDetail = props => {

    const params = useParams();

    const quoteItem = DUMMY_LIST.find(item => item.id === params.quoteId);

    if (!quoteItem) {
        return <NoQuotesFound />;
    }

    return (
        <Fragment>
            <HighlightedQuote author={quoteItem.author} text={quoteItem.quote} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <Link className={classes.btn} to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;