import React, { useEffect, useState } from 'react';
import { fetchRepos, Repo } from './services/githubService';
import RepoList from './components/RepoList';
import './styles/App.css';

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'stars' | 'forks'>('stars');
  const [username, setUsername] = useState<string>('npalm');

  useEffect(() => {
    document.title = 'GitHub Repositories';
    const getRepos = async () => {
      try {
        const data = await fetchRepos(username);
        setRepos(data);
      } catch (err) {
        setError('Failed to fetch repositories');
      }
    };
    getRepos();
  }, [username]);

  const sortedRepos = [...repos].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      {error && <p>{error}</p>}
      <div className="user-input">
        <label htmlFor="username">GitHub User/Org:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="sort-options">
        <label>
          <input
            type="radio"
            value="stars"
            checked={sortBy === 'stars'}
            onChange={() => setSortBy('stars')}
          />
          Sort by Stars
        </label>
        <label>
          <input
            type="radio"
            value="forks"
            checked={sortBy === 'forks'}
            onChange={() => setSortBy('forks')}
          />
          Sort by Forks
        </label>
      </div>
      <RepoList repos={sortedRepos} />
    </div>
  );
};

export default App;