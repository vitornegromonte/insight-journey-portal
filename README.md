
# Vitor Negromonte - Portfolio

My personal portfolio website showcasing my work as a Data Scientist and AI Researcher.

## Project info

**URL**: https://vitornegromonte.github.io

## How to run locally

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/vitornegromonte/vitornegromonte.github.io.git

# Step 2: Navigate to the project directory
cd vitornegromonte.github.io

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server with auto-reloading and an instant preview
npm run dev
```

## Deployment to GitHub Pages

To deploy this project to GitHub Pages:

1. Create a new repository named `vitornegromonte.github.io` on GitHub.
2. Push your code to the repository:

```sh
git remote add origin https://github.com/vitornegromonte/vitornegromonte.github.io.git
git branch -M main
git push -u origin main
```

3. Install the `gh-pages` package:

```sh
npm install gh-pages --save-dev
```

4. Add these scripts to your `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

5. Run the deploy command:

```sh
npm run deploy
```

6. Configure GitHub repository settings:
   - Go to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Set Branch to "gh-pages" with folder set to "/ (root)"
   - Click Save

## Technologies used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
