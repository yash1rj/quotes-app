import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout/Layout';
import NoQuotesFound from './components/Quotes/NoQuotesFound/NoQuotesFound';
import QuoteDetail from './components/Quotes/QuoteDetail/QuoteDetail';
import QuoteForm from './components/Quotes/QuoteForm/QuoteForm';
import QuoteList from './components/Quotes/QuoteList/QuoteList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <QuoteList />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <QuoteForm />
        </Route>
        <Route path='*'>
          <NoQuotesFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
