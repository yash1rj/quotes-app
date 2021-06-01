import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';
import QuoteItem from '../QuoteItem/QuoteItem';
import classes from './QuoteList.module.css';

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

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((a, b) => {
        if(ascending) {
            return a.id > b.id ? 1 : -1;
        }
        else {
            return a.id < b.id ? 1 : -1;
        }
    });
};

const QuoteList = props => {

    const history = useHistory();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(DUMMY_LIST, isSortingAscending);

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
        });
    };

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