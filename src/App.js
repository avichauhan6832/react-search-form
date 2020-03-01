import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import FormPage from './containers/formPage/formPage';
import SearchPage from './containers/searchUser/searchUser';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/" exact >
            <FormPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
