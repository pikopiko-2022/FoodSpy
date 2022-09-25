# JV Review
- no linter errors, nice!
- wow, that's a ton of tests - also a lot of them are failing or have console logs - more work needed
- this is a tricky domain as supermarkets work hard to make it difficult to compare their prices (brands, specials, loyalty discounts). You will likely also need to scrape the data from their websites as I doubt you can get an easy to use api.
- it looks like you have made a db file for every route which has lead to some duplication (getItems in both db and list). I would orient your db functions around your db, not the routes they are used in
- the same with your api client - getAllItems is the same in apiClient and basket
- I suspect you can make your api calls more efficient - e.g. http://localhost:3000/item/9 calls both /api/v1/items/9 and /api/v1/item-data/9 - maybe all that data can be retrieved in one api call?
- well done for giving google maps a go

# Boilerplate: Fullstack with Sass

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* configuration for preprocessing Sass
* a single client-side test (`client/components/App.test.js`)

### Installation

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-fullstack-scss)
