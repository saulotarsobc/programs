import { writeFile } from "fs/promises";
import { programs } from "./constants";
import { ProgramsInterface } from "./interfaces";

function generateReadme(data: ProgramsInterface[]) {
  let readmeContent = "# Programs\n\n";

  data.forEach((app, index) => {
    readmeContent += `## ${index + 1}. **${app.name}**\n\n`;
    readmeContent += `> ${app.description}\n\n`;
    readmeContent += `\`\`\`bash\n`;
    readmeContent += `winget install -e --id "${app.id}" --source ${
      app.source
    };\n`;
    readmeContent += `\`\`\`\n\n`;
    readmeContent += "---\n\n";
  });

  console.log(">>> Content generated successfully!");
  return readmeContent;
}

function writeReadme(dst: string, content: string) {
  writeFile(dst, content)
    .then(() => {
      console.log(">>> File created successfully!");
    })
    .catch((err: Error) => {
      console.error(err.message);
    });
}

async function main() {
  const readme = generateReadme(programs);
  writeReadme("README.md", readme);
}

main();
