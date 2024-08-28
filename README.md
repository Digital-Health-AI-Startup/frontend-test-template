# full-stack-test-template

A monorepo template to use for our full-stack test.

## Expectations

As the name implies this is meant to be a full-stack test, but no full-stack engineer
focuses equally on frontend and backend. Please complete both ends of the test, but
feel free to lean more into the area you are most passionate about, and let us know 
in this README which side you're leaning.

There is no time limit imposed by us or required response time.
This is your opportunity to stand out and show us your skills.
We're excited to see what you come up with!

## Process

1. Start by using this template. You can do this by clicking the "Use this template" button in the top right, then "Create a new reposistory". You should make this new repo private.
2. Read the details about the test below and complete the test to your liking.
3. Invite the code review team to your repository and email us to let us know it's ready. If the list of GitHub users has not already been provided to you, work with your contact here to get that list.
4. We will review your work and schedule a technical interview where you will meet some of our engineers and discuss this test.

# The Test

There are two sections to the test: API and UI.
There are READMEs in each workspace, though they are just the default READMEs generated by NestJS & Vite.
You can use them for reference or modify/replace them with anything you want to document.

## API

[Set up a SQLite database with TypeORM](https://docs.nestjs.com/techniques/database) and configure it with the NestJS workspace. Create simple CRUD endpoints for any kind of entity (“users” would be a go-to default but feel free to come up with something more interesting to you, pick something from a hobby or a TV show you like; anything), and also create an [SSE](https://docs.nestjs.com/techniques/server-sent-events) endpoint that sends notifications when an entity is created. Bonus points if your entity has any one-to-one or many-to-one relations. We would expect everything to follow Nest’s and TypeORM’s patterns, shown in their documentation. This includes [controller](https://docs.nestjs.com/controllers)/[provider](https://docs.nestjs.com/providers) separation and [TypeORM repositories & entities](https://docs.nestjs.com/techniques/database#repository-pattern).

Just for the sake of this test, commit & push your SQLite database as well with a number of records already populated in the database.

## UI

Find something that inspires you on [Dribbble](https://dribbble.com/shots/popular/web-design) and use that as a basis for your front end. We’re not expecting anything crazy but we just want to compare what you picked vs what you implemented to see how you implement a design. **The only thing we specifically ask is that you use [MUI](https://mui.com/material-ui/getting-started/) components**, only because that’s what we use for our web apps. Develop a page that loads your API’s entities (e.g. “users”) and displays them as a list along with any of their detailed information.

Also develop a working frontend implementation of your SSE endpoint so that toast notifications are displayed whenever one of your entities is created.

**We want to emphasize that we do not expect a full scale application with working navigation, complex animations, etc. You should only develop what you need in order to accomplish the goal we've given. Dribbble designs should be used as a basis/foundation for your app's design, not as a goal in itself.**

# Prerequisites

- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or [Node.js v20.12.0](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation#using-corepack) _(We recommend installing with Corepack)_
- (Optional) [nx](https://nx.dev/getting-started/installation) for running workspaces

# Technologies

Just like the stack we use in our monorepo, this monorepo uses [**NestJS**](https://docs.nestjs.com/) for the API, and **React** (bundled by [**Vite**](https://vitejs.dev/guide/)) for the front end web app. We use **pnpm** for our package manager, which also manages the workspaces within the monorepo.

# Getting Started

After installing the prerequisites, you can use `nvm` to install & path the correct Node version based on the `.nvmrc` in this repository.

```bash
nvm install
nvm use
```

Then, install packages from the monorepo root

```bash
pnpm i
```

You can use `nx`, either from a global install or with `pnpx`, to run workspace scripts from each workspace. There are more details on [their website](https://nx.dev/nx-api/nx) but for some quick examples:

- `pnpx nx run api:start:dev` is going to `run` a package.json script in the `api` workspace, and the script is `start:dev`
- `pnpx nx run-many -t start:dev -p api web` is going to concurrently run the `start:dev` scripts in both `api` and `web` workspaces

# Other Scripts

- `pnpm run start:dev` - Runs both API and web app together, concurrently
