# NHS AI Lab Skunkworks Website

This [Next.js](https://nextjs.org/docs) based documentation contains
the source code of the website [deployed to GitHub Pages](https://nhsx.github.io/skunkworks/).

## Build the site locally

First, install the requirements:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (testing and production)

Commits merged to master are automatically deployed using the GitHub Actions / GitHub Pages
setup, using [this workflow](../.github/workflows/site-deployment.yml).

## Content

Content is stored in MDX format and can be found in `/documentation`. To make a change, create a new PR with the required changes. 