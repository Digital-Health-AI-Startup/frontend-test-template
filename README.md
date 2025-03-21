# Percipio Take Home Challenge

## Expectations

Please make note of the following expectations before you begin coding:

1. **This challenge consists of two pieces - (1) the base challenge, and (2) is the enhancement**. We expect you to complete the base challenge and only one of the enhancements from the list further down this readme.
2. **We will only assess you for the code you submit that completes the base challenge and the one enhancement**. Please indicate in your submission which enhancement you completed.
3. **We expect you to spend 2-4 hours on this challenge**. If you’re unable to complete all the requirements in that time frame, feel free to explain in your write-up any of the thoughts or plans you would have completed with more time.
4. **We do not expect a full scale application with working navigation, complex animations, etc. You should only develop what you need in order to accomplish the goal we've given.**
5. The purpose of this challenge is to get a sense of your work, and to serve as the focal point of your technical interview. Expect the code you submit to come up in your technical interview.

## The Process

1. Start by using this template. You can do so by clicking the "Use this template" button in the top right of the GitHub UI, then "Create a new repository". Make this new repo private.
2. Read the details about the test below and complete the test in two separate branches. One branch should contain your solution for the base challenge. The second should contain your solution for the enhancement.
3. When you are ready to submit, open two PRs - one for the base challenge, the second for the enhancement. The PRs do not have to be opened at the same time.
4. Invite the code review team to your repository and email us to let us know it's ready. If the list of GitHub users has not already been provided to you, work with your contact here to get that list.
5. We will review your work and schedule a technical interview where you will meet some of our engineers and discuss this test.

## Submitting the Test

When you are ready to submit the challenge, please open two PRs. One PR should consist of your solution for the **base challenge**. The second PR should consist of your solution to the **enhancement** you’ve selected.

In both of your PR descriptions, please include:

1. Relevant screenshots/screen-recordings.
2. A brief description of your submission.
3. Anything else you might like us to know as we review your submission.

In the PR description for your enhancement, please also include:

1. Which enhancement you completed. If you completed more than one, please specify which one you would like us to focus on.
2. If you chose to complete your own custom task, please elaborate here on what you accomplished and why you chose that task.

## The Test

### Background Information

For this challenge, let’s pretend that we have built a system that receives health data from a patient, like their heart rate and blood pressure, and will output “discoveries” about a patient. A discovery is a piece of data that represents an insight into a patient’s health. For example, if a patient has a resting heart rate of 60 beats per minute, and in a few weeks the patient’s resting heart rate increases to 65 bpm, a discovery might be generated that says, “Patient’s resting heart rate has increased from 60 bpm to 65 bpm.”

While our system does generate discoveries, these discoveries are not being displayed anywhere, therefore they cannot be viewed. Our clinicians have asked us to build an interface where discoveries can be viewed. Once a discovery has been reviewed by a clinician, the clinician should be able to move the discovery over to an “Acknowledged” list.

The “Acknowledged” list will signal to other clinicians that the discovery has been reviewed and validated by another clinician.

### The Assignment - What we want you to do

Here are the asks we have for you:

**Base Challenge: Acceptance Criteria**

1. As a user, I want to see the full list of 100 discoveries, displayed in reverse-chronological order (most recent first).
   - We've included screenshots to give you an idea of what we're expecting, but we do not expect your submission to resemble the screenshots exactly. Feel free to reference the screenshot as much or as little as you would like!
   - If you plan to use icons in your submission, we suggest using the following icons and colors. You are welcome to use other icons and colors of your choosing if you prefer!
     1. Discoveries of `type` `physiology` can use the icon `<MdFavoriteBorder />` set to color `primaryMain`
     2. Discoveries of `type` `brain` can use the icon `<LuBrain />` set to color `errorLight`
     3. Discoveries of `type` `medication` can use the icon `<LuPill />` set to color `successMain`
2. As a user, I want the ability to accept:
   - A single discovery
   - Multiple discoveries
   - All discoveries  
     so that I can indicate which discoveries have been reviewed for the patient.
3. As a user, I should be able to select one, multiple, or all discoveries.
4. When a discovery is moved to the “Acknowledged” list:
   - A “Submit” button should appear.
   - Clicking “Submit” should save the list of acknowledged discoveries.
   - The acknowledged discoveries list should persist after a page refresh.

Once you have completed all the requirements above, open a PR with your submission.

**Enhancement: Acceptance Criteria.**
Please select one Enhancement from the list of Enhancements below to complete. Once you have selected an Enhancement, create a new branch. This new branch will contain your solution for your selected enhancement. In your PR, please state which Enhancement you selected.

**Notes:**
Once you create a UI where discoveries can be viewed, the “Acknowledged” list, and one enhancement, the take home challenge is considered complete and can be submitted.
Please make note of the following:

1. The discoveries data already exists, and an endpoint already exists that will send back the list of discoveries. Neither the data nor the endpoint need to be updated in order for you to successfully complete the challenge, but you may modify the data or the endpoint should you choose to.
2. Please use [MUI](https://mui.com/) and [react-icons](https://react-icons.github.io/react-icons/icons/md/) to build the UI for this challenge. We recommend you use the icons: `MdFavoriteBorder`, `LuPill`, and `LuBrain`
3. All packages you need to complete the **base challenge** are included in the package.json. You should not need to install any new dependencies to complete the base challenge, but you are welcome to install and use other dependencies if you would like to.
4. We are not expecting you to do any work outside of building the interface for the base list and “Acknowledged” list, wiring up the “Submit” button, and completing the enhancement.
5. None of the code that you submit will be used in any way in our actual codebase. This challenge is a generic challenge that does not represent any active work being done on our codebase.

## Enhancements

Please select only one of the following tasks to complete.

### #1: Implement infinite scroll with lazy loading

As a user, I should initially see a list of 25 discoveries. As I scroll, more discoveries should be loaded into the screen.

### #2: Implement Pagination

As a user, I should initially see a list of 25 discoveries. There should page numbers at the bottom of the container. Clicking on a page number should show that set of discoveries. Each page should show a maximum of 25 discoveries.

### #3: Create a batch update endpoint

As a user, I want the ability to update multiple discoveries at once through a batch update feature so that I can save time and avoid the inefficiency of updating discoveries one at a time. The UI should be wired to use the new batch update endpoint for seamless functionality.

### #4: Create a summary of the discoveries list

As a user, I want a brief summary of 2-4 sentences highlighting general health trends based on the discoveries in the Acknowledged list so that I can quickly understand key insights about the patient’s health. This summary should be displayed above the list of discoveries. You are welcome to use AI or other tools not included in this repo to accomplish this task.

An example of a summary could be:

```
“The patient has an elevated blood pressure of 160/90mmHg. Additionally, the patient’s Pulse Rate is 59, deviating -5.1% from the historical average of 62.2.”
```

### #5: Add some animations/transitions on the lists

As a user, I want animations, transitions, or other CSS effects added to the lists so that the experience feels more fluid and enjoyable.

### #6: Add Dark Mode and the ability to toggle between Light and Dark Mode

As a user, I should be able to toggle between Light and Dark mode.

### #7: Add test coverage

As a developer, I want to add UI test coverage, e2e tests, or any other necessary tests so that I can ensure my submission works as expected.

### #8: Add ability to "unselect" an acknowledged discovery.

As a user, I would like the ability to move a discovery in the "acknowledged" list back to the base list.

### #9: Have something else in mind you’d like to do?

If you don’t like any of the tasks in the list above, feel free to come up with something on your own! If you choose to complete your own task, please bear in mind the following:

1. Use the tasks listed above as a general idea of the complexity we’re looking for, and keep in mind that we expect the entire challenge to take no longer than 4 hours.
2. Our users consist of hardworking clinicians who want to provide the best possible care for their patients. The task you choose to do should be something that enables clinicians to better use the system so that they can focus on doing what they’re good at!
3. While this is a frontend-focused challenge, if you’d like to flex your API muscles you would be more than welcome to do so.
   If you have any concerns about your idea, feel free to reach out!

## To submit the challenge:

1. Click the "Use this template" button in the top right of the GitHub UI, then "Create a new repository". Make this new repo private.
2. Create two branches - one for building out your solution to the **base challenge**, and a second for your solution for the **enhancement** you’ve selected
3. When you are ready to submit, open two PRs. The Two PRs do not have to be opened at the same time.

In the PR descriptions, please include:

1. Which enhancement you completed/which one you would like us to focus on
2. If you chose to complete your own custom task, please elaborate here on what you accomplished and why you chose
3. Relevant screenshots/screen-recordings
4. Anything else you would like us to know

If you have any questions while completing the challenge, don’t hesitate to reach out to us.

## Getting Started

Before you start coding, make sure you have the following installed on your machine:

1. `nvm` or Node.js
2. `pnpm` (we recommend installing with Corepack)
3. (Optional) nx for running workspaces

Once you’ve got the repo set up, use nvm to install and path the correct Node version based on the .nvmrc in this repo:

```
nvm install
nvm use
```

Then, install packages from the monorepo root:

```
pnpm i
```

And then you can run both the API and web app together, concurrently, by running the following script from the root directory:

```
pnpm run start:dev
```

You should be able to see the app on `http://localhost:5173/` and the API documentation at `http://localhost:3000/api`.

There's more information about how to run the [API](./apps/api/README.md) and [UI](./apps/web/README.md) in their respective directories.

## Packages Included in this Repo

### UI

- React
- [MUI](https://mui.com/)
- [react-icons](https://react-icons.github.io/react-icons/icons/md/)

While you do not need to install any other dependencies to complete the challenge, you are more than welcome to pull in other packages if you would like to.

### API

- [Nest.js](https://nestjs.com/)
