import React, { Fragment, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useHttp from '../../../hooks/useHttp';
import { getSingleQuote } from '../../../lib/api';
import Comments from '../../CommentSection/Comments/Comments';
import Spinner from '../../UI/Spinner/Spinner';
import HighlightedQuote from '../HighlightedQuote/HighlightedQuote';
import NoQuotesFound from '../NoQuotesFound/NoQuotesFound';
import classes from './QuoteDetail.module.css';

const QuoteDetail = props => {

    const { sendRequest, data: quoteItem, status, error } = useHttp(getSingleQuote, true);

    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <h3>
                {error}
            </h3>
        );
    }

    if (status === 'completed' && !quoteItem.quote) {
        return (
            <NoQuotesFound />
        );
    }

    return (
        <Fragment>
            <HighlightedQuote author={quoteItem.author} text={quoteItem.quote} />
            <Route path={match.url} exact>
                <Link className={classes.btn} to={`${match.url}/comments`}>Load comments</Link>
            </Route>
            <Route path={`${match.url}/comments`}>
                <Comments quoteId={quoteId} />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;