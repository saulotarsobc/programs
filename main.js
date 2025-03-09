const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

function generateReadme(data) {
  let readmeContent = "# Apps\n\n";

  data.forEach((app, index) => {
    readmeContent += `## ${index + 1}. **${app.appName}**\n\n`;
    readmeContent += `> ${app.shortDescription}\n\n`;
    readmeContent += `\`\`\`bash\n${app.command}\n\`\`\`\n\n`;
    readmeContent += "---\n\n";
  });

  return readmeContent;
}

const readmeContent = generateReadme(data);

fs.writeFileSync("./README.md", readmeContent);

console.log("README.md gerado com sucesso!");
