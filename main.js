const fs = require("fs");

function generateReadme(data) {
  let readmeContent = "# Apps\n\n";

  data.forEach((app, index) => {
    readmeContent += `## ${index + 1}. **${app.appName}**\n\n`;
    readmeContent += `> ${app.shortDescription}\n\n`;
    readmeContent += `\`\`\`bash\n${app.command}\n\`\`\`\n\n`;
    readmeContent += "---\n\n";
  });

  console.log(">>> Content generated successfully!");
  return readmeContent;
}

function writeFIle(dst, content) {
  fs.writeFileSync(dst, content, (err) => {
    if (err) {
      console.log(e >>> rr);
    }
  });
  console.log(">>> File created successfully!");
}

function main() {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  const readme = generateReadme(data);
  writeFIle("README.md", readme);
}

main();
