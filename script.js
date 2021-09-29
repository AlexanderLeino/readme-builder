const inquirer = require('inquirer')
const fs = require('fs')


inquirer.prompt( [ {
                        type: 'input',
                        name: 'year',
                        message:'What year would you like to be added to your license description'
                    
                    },
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
                        message: 'What is your github username?.',
                    },

                    {
                        type: 'type',
                        name: 'repo',
                        message: 'Please provide with a link to this projects repo.',
                    },
                    
                        
                ])

.then((answers) => {
    let {year, name, title, description, installation, usage, license, contributions, questionsEmail, questionsGithub, repo} = answers
    const readMeTemplate =
`# ${answers.title}
# Description 
    
    
    
    
    `
    

    fs.writeFile('ReadMe.Md', readMeTemplate, function(err) {
        if(err) throw err
        console.log('Read Me has Been Generated')
    })
})

/*What does the read me Need 
- title of my project
sections 
 - Description, 
 -Table of Contents 
 -Installation 
 -Usage 
 -License 
 -Contributing
 -Tests 
 -Questions

What type of questions the generator needs to ask.

WHEN I choose a license for my application from a list of options
{type: 'list'}
choices: [ "Choice A","choice B" ]
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
Add badges from somewhere like: [shields.io](https://shields.io/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

  
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
For support, email fake@fake.com or join our Slack channel.

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README (Need more research)
*/
