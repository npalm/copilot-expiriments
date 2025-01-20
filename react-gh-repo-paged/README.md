# My React App - GitHub Repository List

This project is a React application that lists all repositories of the GitHub user `npalm`. It utilizes recent versions of React and TypeScript, and is formatted using Prettier.

## Features

- Fetches and displays a list of repositories from GitHub.
- Supports optional authentication using a GitHub token.
- Organized into components and services for better maintainability.

## Project Structure

```
my-react-app
├── public
│   ├── index.html         # Main HTML file
├── src
│   ├── components
│   │   └── RepositoryList.tsx  # Component to display repositories
│   ├── services
│   │   └── githubService.ts     # Service for GitHub API calls
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point of the application
│   └── styles
│       └── App.css        # CSS styles for the application
├── .prettierrc            # Prettier configuration
├── package.json           # npm configuration and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

The application will automatically fetch and display the repositories of the user `npalm`. If you want to use a personal access token for authentication, you can set the `GITHUB_TOKEN` environment variable before starting the application.

## License

This project is licensed under the MIT License.