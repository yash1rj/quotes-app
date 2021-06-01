import React, { Fragment, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import useHttp from '../../../hooks/useHttp';
import { getAllQuotes } from '../../../lib/api';
import Spinner from '../../UI/Spinner/Spinner';
import NoQuotesFound from '../NoQuotesFound/NoQuotesFound';
import QuoteItem from '../QuoteItem/QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((a, b) => {
        if (ascending) {
            return a.quote > b.quote ? 1 : -1;
        }
        else {
            return a.quote < b.quote ? 1 : -1;
        }
    });
};

const QuoteList = props => {

    const { sendRequest, data: loadedQuotes, error, status } = useHttp(getAllQuotes, true);

    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const isSortingAscending = queryParams.get('sort') === 'asc';

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
        });
    };

    let sortedQuotes;

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

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

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return (
            <NoQuotesFound />
        );
    }

    if (status === 'completed' && (loadedQuotes || loadedQuotes.length > 0)) {
        sortedQuotes = sortQuotes(loadedQuotes, isSortingAscending);
    }

    const quoteList = (
        sortedQuotes.map(item => {
            return <QuoteItem key={item.id} id={item.id} text={item.quote} author={item.author} />
        })
    );

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>
                    Sort {isSortingAscending ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <ul className={classes.QuoteList}>
                {quoteList}
            </ul>
        </Fragment>
    );
}

export default QuoteList;