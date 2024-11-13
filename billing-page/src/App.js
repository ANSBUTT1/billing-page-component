import React from 'react';// Adjust the path as necessary
import BillingPage from './assets/components/BillingComponent';
import BillingComponentTwo from './assets/components/billingComponentTwo';

function App() {
  return (
    <div className="App flex flex-row justify-center">
      <BillingPage/>
      <BillingComponentTwo/>
    </div>
  );
}

export default App;
