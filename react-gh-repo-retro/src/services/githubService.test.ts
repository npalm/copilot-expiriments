import { describe, it, expect, beforeEach, afterEach, vi, Mock } from 'vitest';
import { fetchRepos, Repo } from './githubService';

describe('fetchRepos', () => {
  beforeEach(() => {
    global.fetch = vi.fn() as Mock;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should fetch repositories for a given username', async () => {
    const mockRepos: Repo[] = [
      {
        id: 1,
        name: 'repo1',
        description: 'Description for repo1',
        stargazers_count: 10,
        forks_count: 5,
        stars: 10,
        forks: 5,
        html_url: 'https://github.com/npalm/repo1',
        url: 'https://github.com/npalm/repo1',
      },
      {
        id: 2,
        name: 'repo2',
        description: 'Description for repo2',
        stargazers_count: 20,
        forks_count: 10,
        stars: 20,
        forks: 10,
        html_url: 'https://github.com/npalm/repo2',
        url: 'https://github.com/npalm/repo2',
      },
    ];

    (global.fetch as Mock).mockResolvedValue({
      ok: true,
      json: async () => mockRepos,
    });

    const repos = await fetchRepos('npalm');
    expect(repos).toEqual(mockRepos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
    })));
  });

  it('should throw an error if the network response is not ok', async () => {
    (global.fetch as Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchRepos('npalm')).rejects.toThrow('Network response was not ok');
  });
});