import React from 'react';
import Layout from './hoc/Layout/Layout';
import FormPage from './containers/formPage/formPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <FormPage />
      </Layout>
    </div>
  );
}

export default App;
