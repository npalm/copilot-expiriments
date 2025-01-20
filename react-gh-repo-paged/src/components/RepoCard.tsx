import React from 'react';

interface RepoCardProps {
  repo: {
    name: string;
    stars: number;
    forks: number;
    description: string;
    url: string;
  };
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="repo-card">
      <div className="repo-stats">
        <span>⭐ {repo.stars}</span>
        <span>🍴 {repo.forks}</span>
      </div>
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-description">{repo.description}</p>
      <a href={repo.url} className="repo-link" target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
};

export default RepoCard;