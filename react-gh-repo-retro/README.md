# React GitHub Repositories

This project is a React web application that displays all public GitHub repositories for the user `npalm`. The repositories are presented in a visually appealing tile format, showcasing essential information such as the repository name, description, stars, and forks. The design is inspired by Pac-Man, providing a unique and engaging user experience.

## Features

- Fetches public repositories from GitHub using a dedicated service.
- Displays each repository in a styled box/tile format.
- Allows sorting of repositories by stars or forks.
- Responsive design to accommodate long repository names and descriptions.

## Technologies Used

- React (latest version)
- TypeScript
- Vitest for unit testing
- Playwright for UI testing
- ESLint for code linting
- Prettier for code formatting

## Project Structure

```
react-github-repos
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── RepoTile.tsx
│   │   └── RepoList.tsx
│   ├── services
│   │   └── githubService.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── tests
│   ├── RepoTile.test.tsx
│   ├── RepoList.test.tsx
│   └── App.test.tsx
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/react-github-repos.git
   ```

2. Navigate to the project directory:
   ```
   cd react-github-repos
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Running Tests

To run the unit tests using Vitest, execute the following command:
```
npm run test
```

For UI testing with Playwright, use:
```
npm run test:ui
```

## Contributing

Feel free to submit issues or pull requests for any improvements or features you'd like to see!

## License

This project is licensed under the MIT License.