const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');



async function makeTeam() {
    await inquirer
        .prompt(
            {
                message: 'What is your team name?',
                name: 'teamname'
            })

        .then(function ({ teamname }) {

            console.log(teamname + ' is a great name!');


        })





    await inquirer
        .prompt([
            {
                message: 'What is the Team Manager\'s name?',
                name: 'managername'
            },
            {
                message: 'What is the Manager\'s ID#?',
                name: 'managerID'
            },
            {
                message: 'What is the Manager\'s Email?',
                name: 'managerEmail'
            },
            {
                message: 'What is the Manager\'s Office #?',
                name: 'officeNumber'
            }
        ]).then(
            function (manData) {

                const name = manData.managername;
                const id = manData.managerID;
                const email = manData.managerEmail;
                const officeNumber = manData.officeNumber;

                const manager = new Manager(id, name, email, officeNumber);

                console.log(manager);
            })

    await inquirer.prompt(
        {
            type: Number,
            message: 'How many engineers are on the team?',
            name: 'numEng'
        }
    ).then(function ({numEng}) {

        console.log('Ok, you have ' + numEng + ' engineers');
    })

    console.log('Still have ' + numEng);

    await inquirer.prompt([
        {
            message: 'Enter an employee name: ',
            name: 'empName'
        },
        {
            message: 'Enter the employee ID#: ',
            name: 'empID'
        },
        {
            message: 'Enter the employee Email: ',
            name: 'empEmail'
        },
        {
            type: 'list',
            message: 'Enter the employee Role: ',
            name: 'empRole',
            choices: ['Engineer', 'Intern']
        }
    ]).then(
        function (empData) {
            const name = empData.empName;
            const id = empData.empID;
            const email = empData.empEmail;
            const role = empData.empRole;

            const employee = new Employee(id, name, email, role); // CHECK HERE.  DON'T MAKE EMPLOYEE, MAKE INTERN/ENGINEER??

            console.log(employee);

        }
    )

}





makeTeam();


// Prompt for Name

// Prompt for ID

// Promp for Email

// Prompt for Role

// If Role === Manager, check hasManager, then set hasManager to true or return 'already have', Prompt for Office Number

// If Role === Engineer, Prompt for GitHub

// If Role === Intern, Prompt for School

// Prompt for more employees?   If yes, new instance, if no, render html
