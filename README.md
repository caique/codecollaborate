# Code & Collaborate

This is the repository with learning resources for the Code & Collaborate module. The exercises here were copied from the Exercism public repository that contains the exercises for the Javascript track.

The contents of some exercises were slightly modified.

## How to solve each exercise?
In the `exercises` folder you will find many exercises to be solved together with your team.

Each exercise is a self-contained NodeJS project with its own relevant files.

Start by reading the `README.md` in the exercise folder. You will find a lot of information in there about the problem and the constraints you need to take into account when solving this problem.

The `*.spec.js` files are the test suite containing automated tests that describe the scenarios you need to implement. We'll do the coding dojo with TDD, so you'll heavily rely on this file to describe your expectations.

The `*.js` like `hello-world.js` contains the production code that we'll change to make our tests green. Here is where you add code to solve the problem.

Make sure that you can enter the exercise folder from the terminal. Then you can:
- run `npm install` or `yarn install` to fetch the dependencies required for that problem
- run `npm test` or `yarn test` to run tests
- change the contents of the `*.js` file to solve the problem

## What are the roles during the coding dojo?
**Driver** is responsible for controlling the keyboard. This is the only person that can make changes in any file.
**Navigator** is responsible for providing guidance to the driver and exchange ideas. Apart from the *Driver*, this is the only person that can speak during the Focus Time.
**Time Keeper** is responsible for keeping track of the time and announcing when the Focus Time ends.
**Audience** just observes and can't say anything during the Focus Time. 

## What is the process of the coding dojo?
- The **Time Keeper** starts a timer of 7min.
- The **Driver** and **Navigator** work together to solve the problem.
- When the time is up they stop working.
- The whole team reflects for 3min on how to improve in the next round. Everyone can talk during these 3min.
- Rotate the roles:
    - The **Navigator** becomes the **Driver**.
    - The **Time Keeper** becomes the **Navigator**.
    - One person from the **Audience** becomes the **Time Keeper**.
    - The **Driver** joins the **Audience**.
- Repeat
