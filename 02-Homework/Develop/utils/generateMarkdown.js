// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){  
 return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
  else if (license === 'GPLV3') {
    return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if(license === 'AGPL') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else 
  return ''

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){  
    return 'www.opensource.org/licenses/MIT'
   }
     else if (license === 'GPLV3') {
       return 'www.gnu.org/licenses/gpl-3.0.en.html'
     }
     else if(license === 'AGPL') {
       return 'www.gnu.org/licenses/agpl-3.0.en.html'
     }
     else {
       return ''
     }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'MIT'){
    return `Copyright Enter Year Here and Enter Name Here
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  else if (license === 'GPLV3'){
    
    return `Copyright (C) Enter Year Here and Enter Name Here
    
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
  
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
  
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
  else if(license === 'AGPL') {
    return `Copyright (C) Enter Year Here and Enter Name Here

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return`
# ${answers.title}
# Description
${renderLicenseBadge(answers.license)}<br>
${answers.description}
# Table of Contents
[Description](#Description)<br>
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[License](#License)<br>
[Contributions](#Contributions)<br>
[tests](#Tests)<br>
[Questions](#Questions)<br>
# Installation<br>
${answers.installation} 
# Usage
${answers.usage} 
# License 
${renderLicenseSection(answers.license)}
${renderLicenseLink(answers.license)}
# Contributions
${answers.contributions}
# Tests
${answers.tests} 
# Questions
${answers.questionsEmail}
${answers.questionsGithub}
`
}

module.exports = generateMarkdown;
