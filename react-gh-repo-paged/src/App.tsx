import React from 'react';
import RepositoryList from './components/RepositoryList';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <RepositoryList />
    </div>
  );
};

export default App;