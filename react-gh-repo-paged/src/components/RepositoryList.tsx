import React, { useEffect, useState, useRef, useCallback } from 'react';
import RepoCard from './RepoCard';
import { fetchRepositories } from '../services/githubService';

interface Repository {
  name: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  html_url: string;
}

const RepositoryList: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [username, setUsername] = useState<string>('npalm');
  const [inputValue, setInputValue] = useState<string>('npalm');
  const [sortCriteria, setSortCriteria] = useState<string>('stars');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const token = process.env.REACT_APP_GITHUB_TOKEN; // Optional: Replace with your GitHub token if needed
  const observer = useRef<IntersectionObserver | null>(null);
  console.log('token:', token);
  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      try {
        const reposData = await fetchRepositories(username, currentPage, 30, token);
        setRepos(prevRepos => [...prevRepos, ...reposData]);
        if (reposData.length < 30) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, [username, currentPage, token]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setRepos([]);
      setUsername(inputValue);
      setCurrentPage(1); // Reset to first page on new search
      setHasMore(true); // Reset hasMore when a new search is performed
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortCriteria(event.target.value);
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortCriteria === 'stars') {
      return b.stargazers_count - a.stargazers_count;
    } else {
      return b.forks_count - a.forks_count;
    }
  });

  const lastRepoElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter GitHub username or org"
        className="username-input"
      />
      <div className="sort-options">
        <label>
          <input
            type="radio"
            value="stars"
            checked={sortCriteria === 'stars'}
            onChange={handleSortChange}
          />
          Stars
        </label>
        <label>
          <input
            type="radio"
            value="forks"
            checked={sortCriteria === 'forks'}
            onChange={handleSortChange}
          />
          Forks
        </label>
      </div>
      <div className="repo-container">
        {sortedRepos.map((repo, index) => {
          if (index === sortedRepos.length - 1) {
            return (
              <div ref={lastRepoElementRef} key={repo.name}>
                <RepoCard
                  repo={{
                    name: repo.name,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    description: repo.description,
                    url: repo.html_url
                  }}
                />
              </div>
            );
          } else {
            return (
              <RepoCard
                key={repo.name}
                repo={{
                  name: repo.name,
                  stars: repo.stargazers_count,
                  forks: repo.forks_count,
                  description: repo.description,
                  url: repo.html_url
                }}
              />
            );
          }
        })}
      </div>
      {loading && <div className="loading">Loading more repositories...</div>}
      {!hasMore && <div className="loading">No more repositories</div>}
    </div>
  );
};

export default RepositoryList;