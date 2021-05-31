import { Redirect, Route, Switch } from 'react-router';
import Comments from './components/Comments/Comments';
import Layout from './components/Layout/Layout';
import QuoteDetail from './components/Quotes/QuoteDetail/QuoteDetail';
import QuoteForm from './components/Quotes/QuoteForm/QuoteForm';
import QuoteList from './components/Quotes/QuoteList/QuoteList';

function App() {
  return (
    <div style={{ height: '100%' }}>
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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
