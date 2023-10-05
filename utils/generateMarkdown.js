// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](LICENSE)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `[License](LICENSE)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `
    ## License
    This project is licensed under the [${license} License](${renderLicenseLink(license)})`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.Description}

  ## Table of contents

  - [Installation](#installation)
  - [Usage](#Usage)
  - [License](#license)
  - [contribution](#contribution)
  - [Tests](#tests)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  [!Github Profile](https://github.com/${data.Questions})  Can reach me with addittional question 
  ${data.Questions2}

`;
}

module.exports = generateMarkdown;
