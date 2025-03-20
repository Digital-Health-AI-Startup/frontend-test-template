# Take Home Challenge Readme

## Expectations

Please make note of the following expectations before you begin coding:

1. **This challenge consists of two pieces - (1) the base challenge, and (2) is the enhancement**. We expect you to complete the base challenge and only one of the enhancements from the list further down this readme.
2. **We will only assess you for the code you submit that completes the base challenge and the one enhancement**. Please indicate in your submission which enhancement you completed.
3. **We expect you to spend 2-4 hours on this challenge**. If you’re unable to complete all the requirements in that time frame, feel free to explain in your write-up any of the thoughts or plans you would have completed with more time.
4. **We do not expect a full scale application with working navigation, complex animations, etc. You should only develop what you need in order to accomplish the goal we've given.**
5. The purpose of this challenge is to get a sense of your work, and to serve as the focal point of your technical interview. Expect the code you submit to come up in your technical interview.

## The Process

Before you start coding, make sure you have the following installed on your machine:

1. `nvm` or Node.js
2. `pnpm` (we recommend installing with Corepack)
3. (Optional) nx for running workspaces

When you are ready to start coding:

1. Clone this repo
2. Create your own branches on your new repo. Create one branch for the base challenge, and a second branch for the enhancement
3. When you are ready to submit, open a PR (more detailed instructions below)

Once you’ve got the repo set up, use nvm to install and path the correct Node version based on the .nvmrc in this repo:

```
nvm install
nvm use
```

Then, install packages from the monorepo root:

```
pnpm i
```

And then you can run both the API and web app together, concurrently, with the following script:

```
pnpm run start:dev
```

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

**Base Challenge, Part One: Build an interface where these discoveries can be viewed by a user.**
As a user, I want to be able to see the full list of 100 discoveries. The list of discoveries should look like what’s in the mock (DESIGN LINK HERE) . The discoveries should be listed in reverse-chronological order (most recent first).

**Base Challenge, Part Two: Create the Ability to “Acknowledge” Discoveries.**
As a user, I want the ability to accept a single discovery, multiple discoveries, or all discoveries so that I can show that I have reviewed the discoveries that have been made for the patient.
The user should be able to select one, multiple, or all discoveries.
When a discovery is moved over to the “Acknowledged” list, a “Submit” button should appear.
Clicking “Submit” should save the list of Acknowledged discoveries.
After clicking “Submit,” the Acknowledged list should persist after a page refresh.

**Enhancement: Select a Single Enhancement from the list of “Enhancements” to complete.**
While you may choose to complete multiple tasks from the list, you will only be assessed for completing one of them. So if you complete three of the tasks, we will only assess you for one of the three. When you submit your assessment you can select which Enhancement you would like us to assess.

**Notes:**
Once you create a UI where discoveries can be viewed, the “Acknowledged” list, and one enhancement, the take home challenge is considered complete and can be submitted.
Please make note of the following:

1. The discoveries data already exists, and an endpoint already exists that will send back the list of discoveries. Neither the data nor the endpoint need to be updated in order for you to successfully complete the challenge, but you may modify the data or the endpoint should you choose to.
2. Please use MUI to build the UI for this challenge. You can use MUI icons by importing them from `'react-icons/md'`.
3. All packages you need to complete the **base challenge** are included in the package.json. You should not need to install any new dependencies to complete the base challenge.
4. We are not expecting you to do any work outside of building the interface for the base list and “Acknowledged” list, wiring up the “Submit” button, and completing the enhancement.
5. None of the code that you submit will be used in any way in our actual codebase. This challenge is a generic challenge that does not represent any active work being done on our codebase.

## Enhancements

Please select only one of the following tasks to complete.

### #1: Implement infinite scroll with lazy loading

100 discoveries is a lot of data to render, and it may overwhelm the user to see so much data all at once! To make the experience of viewing discoveries less overwhelming for our users, implement infinite scroll with lazy loading so that the user only sees a set amount of discoveries at once, and the user can scroll to see the next batch of data.

You are welcome to choose how much data to show initially, and how much data to fetch as the user scrolls.

### #2: Implement Pagination

Similarly, pagination is another strategy for showing large amounts of data. To prevent overwhelming our users with a lot of discoveries, implement pagination so that our users only sees a set amount of discoveries at a time.

### #3: Create a batch update endpoint

Currently, discoveries can only be updated one at a time. This is inefficient, given that we will usually be updating multiple discoveries at the same time. Create a new batch update endpoint that takes in a list of discoveries and updates them in one go. Wire up the UI to use the new batch update endpoint.

### #4: Create a summary of the discoveries list

Each discovery provides an insight into the patient’s health, and in this assessment 100 discoveries are provided. For this enhancement, generate a brief summary of 2-4 sentences that highlights general health trends for the patient that is based on the discoveries in the Acknowledged list. Display this summary above the list of discoveries.

Here’s an example of what a summary could look like for a patient that has multiple discoveries related to elevated blood pressure levels and high resting heart rate:

“The patient has an elevated blood pressure of 160/90mmHg. Additionally, the patient’s Pulse Rate is 59, deviating -5.1% from the historical average of 62.2.”

You are welcome to use AI or other tools not included in this repo to generate the summary.

### #5: Add some animations/transitions on the lists

Add some animations, transitions, or other CSS effects that makes the experience of working with the lists more fluid and enjoyable.

### #6: Add Dark Mode and the ability to toggle between Light and Dark Mode

### #7: Add test coverage

Whether it be UI test coverage, e2e tests, add any tests you feel would ensure your submission works as expected.

### #8: Have something else in mind you’d like to do?

If you don’t like any of the tasks in the list above, feel free to come up with something on your own! If you choose to complete your own task, please bear in mind the following:

1. Use the tasks listed above as a general idea of the complexity we’re looking for, and keep in mind that we expect the entire challenge to take no longer than 4 hours.
2. Our users consist of hardworking clinicians who want to provide the best possible care for their patients. The task you choose to do should be something that enables clinicians to better use the system so that they can focus on doing what they’re good at!
3. While this is a frontend-focused challenge, if you’d like to flex your API muscles you would be more than welcome to do so.
   If you have any concerns about your idea, feel free to reach out!

## To submit the challenge:

1. Clone the repo
2. Create two branches - one for building out your solution to the base challenge, and a second for your solution for the enhancement you’ve selected
3. When you are ready to submit, open two PRs

In the PR description, please include:

1. Which enhancement you completed/which one you would like us to focus on
2. If you chose to complete your own custom task, please elaborate here on what you accomplished and why you chose
3. Relevant screenshots/screen-recordings
4. Anything else you would like us to know

If you have any questions while completing the challenge, don’t hesitate to reach out to us.
