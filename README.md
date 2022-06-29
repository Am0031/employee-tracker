# Employee tracker

![MIT](https://img.shields.io/badge/License-MIT-blue)

## Summary of the project and links

This is a team profile generator using node.js, the inquirer package and MySQL.

Github repo: [Go to Repo](https://github.com/Am0031/employee-tracker/tree/dev)
Demo video: [Go to Demo video]()

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies](#technologies)
- [Main logic of the application](#main-logic-of-the-application)
- [Installation](#installation)
- [Demo video](#demo-video-of-the-application)
- [Contact me](#contact-me)

## About the Project

### User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

### Further details

When running the application, the business user is presented with a list of choices:

```
? Please select an action: (Use arrow keys)
> View All Departments
  View All Roles
  View All Employees
  View All Employees by Department
  View All Employees by Manager
  View Spend by Department
  Add a Department
  Add a Role
  Add an Employee
  Update an Employee's Manager
  Remove a Department
  Remove a Role
  Remove an Employee
  Quit application

```

This application uses Node.js, the inquirer package and MySQL. It presents the user with options on how they can interact with a company database.

After each selection, the user is presented with the result of their selection (see below) and the selection list again until they exit.

Result of the different selections:

- viewing options: a table of the results
- updating/adding options: further questions to gather the required information, with validation in place to make sure all the fields are filled in
- removing options: selection and confirmation question to make sure the user is aware of the consequences of his choice.
- quitting option: an exit message and the creation of an html report (based on the database status on exit)

## Technologies

For this project, the following technologies and packages were used:

- Node.js v18.2.0 and NPM v8.9.0
- Node core packages: fs (for reading/writing into files),
- Node external packages:
  "console.table": "^0.10.0",
  "dotenv": "^16.0.1",
  "express": "^4.18.1",
  "inquirer": "^8.2.4",
  "mysql2": "^2.3.3",
  "node-fetch": "^2.6.7",
  "open": "^8.4.0"

## Main Logic of the application

Design of the database:

![Database schema includes tables labeled “employee,” role,” and “department.”](./other/12-sql-homework-demo-01.png)

Routes:
![Routes diagram](./other/screenshots/main-logic.png)

## Installation

To get this project installed, the following steps are required:

Clone the repository, using SSH keys:

```
git clone git@github.com:Am0031/employee-tracker.git
```

Or using HTTPS link:

```
git clone https://github.com/Am0031/employee-tracker.git
```

Go into the new repository and install the required packages:

```
cd employee-tracker
npm install
```

Once installed, to get this project running, the following command must be entered in the CLI:

Step 1: Database setup

From the db folder, open an integrated terminal and enter the instructions below in this order, one line at a time, pressing enter after each line:

```
mysql -u root -p
(enter your password when prompted)

source schema.sql

source depSeed.sql

source roleSeed.sql

source employeeSeed.sql

quit
```

Step 2: Start the application

From the root folder, open an integrated terminal and enter the instruction below and press enter:

```
npm run start
```

## Demo video of the application

This video shows how the application works.
Please click [here](https://drive.google.com/file/d/1CH2OFQBZ5pyW4cKtX1qrRK81sBAKIvkC/view) to open the video.

![Team profile demo gif](./other/team-profile-demo.gif)

You can check out the html report that this application creates on exit by looking at the file ["report.html"](./dist/report.html) available in this repository.

## Contact me

If you have any questions about this application, feel free to get in touch by sending me an [email](mailto:amelie.pira@gmail.com).
