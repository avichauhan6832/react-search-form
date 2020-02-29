import React from 'react';
import Layout from './components/Layout/Layout';
import UserForm from './containers/userForm/userForm';

function App() {
  return (
    <div className="App">
      <Layout>
        <UserForm />
      </Layout>
    </div>
  );
}

export default App;
