import { DataInterface } from "./interfaces";
import { writeFile } from "fs/promises";
import { CONSTANTS } from "./constants";

function generateReadme(data: DataInterface[]) {
  let readmeContent = "# Apps\n\n";

  readmeContent += "## How to Install winget on Windows\n\n";
  readmeContent +=
    "To install winget on Windows, you can use the following PowerShell command:\n\n";
  readmeContent += "```powershell\n";
  readmeContent +=
    "Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://aka.ms/install-winget.ps1')\n";
  readmeContent += "```\n\n";
  readmeContent += "---\n\n";

  data.forEach((app, index) => {
    readmeContent += `## ${index + 1}. **${app.name}**\n\n`;
    readmeContent += `> ${app.shortDescription}\n\n`;
    readmeContent += `\`\`\`bash\n`;
    readmeContent += `winget install ${app.type} "${app.id}" ${
      app.interactive ? "--interactive" : "--silent"
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
  const { data } = CONSTANTS;
  const readme = generateReadme(data);
  writeReadme("README.md", readme);
}

main();
