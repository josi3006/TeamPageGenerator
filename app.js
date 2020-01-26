const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const puppeteer = require("puppeteer");


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

                console.log(manager);

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

        console.log('Ok, you have ' + numEng + ' engineers');

        loopEng(numEng, manager, teamname);
    })

}





//This code takes Engineer info by looping through prompts

async function loopEng(numEng, manager, teamname) {
    console.log('Still have ' + numEng);

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

                    console.log(engineer);

                    engineers.push(engineer)
                }
            )
    }

    console.log('-------Engineer Array--------');
    console.log(engineers);

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

        console.log('Ok, you have ' + numNoob + ' interns');

        loopNoob(numNoob, engineers, numEng, manager, teamname);
    })

}






//This code takes Intern info by looping through prompts

async function loopNoob(numNoob, engineers, numEng, manager, teamname) {
    console.log('You have ' + numNoob + 'interns.');

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

                    console.log(intern);

                    interns.push(intern);

                }
            )
    }

    console.log('-----------Intern Array------------');
    console.log(interns);

    writeFile(interns, numNoob, engineers, numEng, manager, teamname)

    const data = generateHTML(interns, numNoob, engineers, numEng, manager, teamname);

    writeFile(data);

}





function generateHTML(interns, numNoob, engineers, numEng, manager, teamname) {


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <script src="index.js" defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src='https://kit.fontawesome.com/22772263e9.js' crossorigin='anonymous'></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>

    <div class='container container-fluid justify-content-center'>

        <div class='row justify-content-center'>                        
            <div class='jumbotron'>
            <h1>${teamname}</h1>
            </div>
        </div>

        <div class='row justify-content-center'>
            <div class='col-3'>
                <div class='card'>
                    <div class='card-body rounded'>
                        <h4 class='card-title text-white text-center'>Manager</h3>
                        <p>${manager}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    
    
    </body>
    </html>
    `
    // writeFile(allData);

}


function writeFile(data) {
    writeFileAsync("profile.html", data)
        .then((async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(data);
        }
        )
        );

}

makeTeam();

