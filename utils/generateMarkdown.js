// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}\n
## Description\n
${data.project_description}\n\n
## Installation\n
${data.installation}\n
## Usage\n
${data.usage}\n
![${data.image_text}](${data.image_url} "${data.image_text}")\n\n
## License\n
©${data.license}
`;
}

module.exports = generateMarkdown;
