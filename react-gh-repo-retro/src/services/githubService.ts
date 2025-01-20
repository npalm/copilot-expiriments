export interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  stars: number;
  forks: number;
  html_url: string;
  url: string; // Add this line
}

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.map((repo: Repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url, // Map html_url to url
  }));
};
