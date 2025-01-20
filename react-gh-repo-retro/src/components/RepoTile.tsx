import React from 'react';

interface RepoTileProps {
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
}

const truncateDescription = (description: string | null, maxLength: number) => {
  if (!description) {
    return '';
  }
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

const RepoTile: React.FC<RepoTileProps> = ({ name, description, stars, forks, url }) => {
  return (
    <div className="repo-tile">
      <h3>{name}</h3>
      <p>{truncateDescription(description, 100)}</p>
      <p>⭐ {stars}</p>
      <p>🍴 {forks}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
  );
};

export default RepoTile;