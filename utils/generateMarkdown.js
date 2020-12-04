// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}\n
  ©${data.license}
## Description\n
${data.project_description}\n\n
## Table of Contents\n
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation\n
${data.installation}\n
## Usage\n
${data.usage}\n
![${data.image_text}](${data.image_url} "${data.image_text}")\n\n
## Contributing\n
${
  data.contribution_guidelines
    ? data.contribution_guidelines
    : "No Instruction Provided."
}\n
## Tests\n
${data.test_guidelines ? data.test_guidelines : "No Instruction Provided."}\n
## Questions\n
[${github_username}](https://www.github.com/${github_username})\n
Reach me with additional questions at ${user_email_address}.\n
## License\n
The content of this site is licensed under ${data.license}.
`;
}

module.exports = generateMarkdown;
