export const fetchRepositories = async (username: string, page: number = 1, perPage: number = 30, token?: string) => {
  const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};
  const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  return response.json();
};