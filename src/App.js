import React, { Fragment } from 'react';
import Header from './components/Header';

import ProviderCategories from './context/ContextCategories';

function App() {
  return (
    <ProviderCategories>
      <Header />
    </ProviderCategories>
  );
}

export default App;
