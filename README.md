![node version 14](https://img.shields.io/badge/node-v14-green)

# NHS AI Lab Skunkworks Website

This [Next.js](https://nextjs.org/docs) based documentation contains
the source code of the website [deployed to GitHub Pages](https://nhsx.github.io/skunkworks/).

## Getting started

You will need:

* node v14

It is recommended to use a node package manager like [nvm](https://github.com/nvm-sh/nvm) to manage node versions.

First, install the requirements:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment  

Upon merging into `main`, the project is automatically deployed to Github Pages via a Githook Action found in `.github/workflows/gh-pages-deploy.yml`. 

## Content

* Page content is stored in MDX format and can be found in `documentation/`.
* Images are stored in `public/images/`
* Site navigation is defined in `lib/menus.js`.

To update content, simply update the corresponding `.mdx` file.

To add a new page:

1. Create a new `.mdx` file in `documentation/` where the filename will be the URL
2. Update `lib/menus.js` with a link to the new page, following existing examples
3. Test locally
4. Raise a new PR to `main`

## Licence

Unless stated otherwise, the codebase is released under [the MIT Licence][mit].
This covers both the codebase and any sample code in the documentation.

The documentation is [© Crown copyright][copyright] and available under the terms
of the [Open Government 3.0][ogl] licence.

[mit]: LICENSE
[copyright]: http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/
[ogl]: http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
