import React from 'react';
import RepoTile from './RepoTile';
import { Repo } from '../services/githubService';

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoTile
          key={repo.id}
          name={repo.name}
          description={repo.description}
          stars={repo.stars}
          forks={repo.forks}
          url={repo.url}
        />
      ))}
    </div>
  );
};

export default RepoList;