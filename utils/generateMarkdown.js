// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)';
  } else if (license === "Apache 2.0 License") {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === "GNU General Public License 3.0") {
    return '![License: GNU GPL 3.0](https://img.shields.io/badge/License-GNU_GPL_3.0-yellow.svg)';
  } else if (license === "Mozilla Public License 2.0") {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-green.svg)';
  } else if (license === 'Unlicensed') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0 License') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU General Public License 3.0') {
    return '[GNU General Public License 3.0](https://opensource.org/license/gpl-3-0)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Unlicensed') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicensed') {
    return '';
  } else {
    return `Licensed under the ${renderLicenseLink(license)} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.motivation} 

${data.build} 

${data.problem} 

${data.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions, please email me at ${data.email} or for more information visit [GitHub](${data.github}).
`;
}

export default generateMarkdown;
