import { writeFile } from "fs/promises";
import { CONSTANTS } from "./constants";
import { ProgramsInterface } from "./interfaces";

function generateReadme(data: ProgramsInterface[]) {
  let readmeContent = "# Programs\n\n";

  data.forEach((app, index) => {
    readmeContent += `## ${index + 1}. **${app.name}**\n\n`;
    readmeContent += `> ${app.shortDescription}\n\n`;
    readmeContent += `\`\`\`bash\n`;
    readmeContent += `winget install ${app.type} "${app.id}" --source ${
      app.source
    } ${app.interactive ? "--interactive" : "--silent"};\n`;
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
  const readme = generateReadme(CONSTANTS.programs);
  writeReadme("README.md", readme);
}

main();
