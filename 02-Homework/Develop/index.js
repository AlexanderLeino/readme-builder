const inquirer = require('inquirer')
const fs = require('fs')
const markDownGenerator = require('./utils/generateMarkdown')


inquirer.prompt( [
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is your first and last name'
                        
                    },
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the title of your project',

                    },

                    {
                        type: 'input',
                        name: 'description',
                        message: 'Write a brief description of how your project works.',

                    },

                    {
                        type: 'input',
                        name: 'installation',
                        message: 'Please include any instructions here for being able to make your program run properly on someone elses computer',

                    },

                    {
                        type: 'input',
                        name: 'usage',
                        message: 'What problem are you solving with the project',

                    },

                    {
                        type: 'list',
                        name: 'license',
                        choices: ["MIT", "GPLV3", "AGPL"],

                    },

                    {
                        type: 'type',
                        name: 'contributions',
                        message: 'Did anyone else contribute to this project? If so please indicate who.',
                    },

                    {
                        type: 'type',
                        name: 'tests',
                        message: 'What is required to test your project.',
                    },

                    {
                        type: 'type',
                        name: 'contributions',
                        message: 'Did anyone else contribute to this project? If so please indicate who.',
                    },
                    {
                        type: 'type',
                        name: 'questionsEmail',
                        message: 'If anyone has any additional questions what is the best email to reach you by?.',
                    },

                    {
                        type: 'type',
                        name: 'questionsGithub',
                        message: 'What is your personal github url.',
                    },

                    {
                        type: 'type',
                        name: 'repo',
                        message: 'Please provide with a link to this projects repo.',
                    },            
                ])

.then((answers) => {
    let {year, name, title, description, installation, usage, license, contributions, questionsEmail, questionsGithub, repo} = answers
    const markDownTemplate = markDownGenerator(answers)
    console.log(answers)

    fs.writeFile('ReadMe.Md',markDownTemplate, function(err) {
        if(err) throw err
        console.log('Read Me has Been Generated')
    })
})

//Things I need help with. Getting 
