const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');




//This code prompts for team name

async function makeTeam() {
    await inquirer
        .prompt(
            {
                message: 'What is your team name?',
                name: 'teamname'
            })

        .then(function ({ teamname }) {

            console.log(teamname + ' is a great name!');


            managerInfo(teamname);

        })


}


let allHTML = "";

// This code gathers info on the Manager

async function managerInfo(teamname) {
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

                indivEmpl = fs.readFileSync("templates/manager.html");
                allHTML = allHTML + "\n" + eval('`' + indivEmpl + '`');

                engSize(manager, teamname);

            })
}







// This code prompts for the number of Engineers

async function engSize(manager, teamname) {
    await inquirer.prompt(
        {
            type: Number,
            message: 'How many engineers are on the team?',
            name: 'numEng'
        }
    ).then(function ({ numEng }) {

        loopEng(numEng, manager, teamname);
    })

}





//This code takes Engineer info by looping through prompts

async function loopEng(numEng, manager, teamname) {

    let engineers = [];


    for (var e = 0; e < numEng; e++) {

        let i = e + 1;

        await
            inquirer.prompt([
                {
                    message: 'Enter name for Engineer ' + i + ':',
                    name: 'engName'
                },
                {
                    message: 'Enter ID for Engineer ' + i + ':',
                    name: 'engID'
                },
                {
                    message: 'Enter email for Engineer ' + i + ':',
                    name: 'engEmail'
                },
                {
                    message: 'Enter GitHub id for Engineer ' + i + ':',
                    name: 'engGithub',
                }
            ]).then(
                function (engData) {
                    const name = engData.engName;
                    const id = engData.engID;
                    const email = engData.engEmail;
                    const github = engData.engGithub;

                    const engineer = new Engineer(id, name, email, github);

                    indivEmpl = fs.readFileSync("templates/engineer.html");
                    allHTML = allHTML + "\n" + eval('`' + indivEmpl + '`');

                    engineers.push(engineer)

                }
            )
    }



    noobSize(engineers, numEng, manager, teamname);

}








// This code prompts for number of Interns

async function noobSize(engineers, numEng, manager, teamname) {
    await inquirer.prompt(
        {
            type: Number,
            message: 'How many interns are on the team?',
            name: 'numNoob'
        }
    ).then(function ({ numNoob }) {

        loopNoob(numNoob, engineers, numEng, manager, teamname);
    })

}






//This code takes Intern info by looping through prompts

async function loopNoob(numNoob, engineers, numEng, manager, teamname) {

    let interns = [];

    for (var n = 0; n < numNoob; n++) {

        let g = n + 1;

        await
            inquirer.prompt([
                {
                    message: 'Enter name for Intern ' + g + ':',
                    name: 'intName'
                },
                {
                    message: 'Enter ID for Intern ' + g + ':',
                    name: 'intID'
                },
                {
                    message: 'Enter email for Intern ' + g + ':',
                    name: 'intEmail'
                },
                {
                    message: 'Enter school for Intern ' + g + ':',
                    name: 'intSchool',
                }
            ]).then(
                function (intData) {
                    const name = intData.intName;
                    const id = intData.intID;
                    const email = intData.intEmail;
                    const school = intData.intSchool;

                    const intern = new Intern(id, name, email, school);

                    indivEmpl = fs.readFileSync("templates/intern.html");
                    allHTML = allHTML + "\n" + eval('`' + indivEmpl + '`');

                    interns.push(intern);

                }
            )
    }

    const bigHTML = fs.readFileSync("templates/compiled.html");

    allHTML = eval('`' + bigHTML + '`');

    fs.writeFile("output/index.html", allHTML, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Done! Ready to Open!");
    });
}







makeTeam();

