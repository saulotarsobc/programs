# Script para instalar ferramentas de desenvolvimento no Windows usando winget

# Instala Visual Studio Code
winget install --id Microsoft.VisualStudioCode

# Instala Git
winget install --id Git.Git --interactive

# Instala GitHub Desktop
winget install --id GitHub.GitHubDesktop --interactive

# Instala Node.js (LTS)
winget install --id OpenJS.NodeJS.LTS --interactive

# Instala Sublime Text 4
winget install SublimeHQ.SublimeText.4 --interactive

# Instala Sublime Text 4 (Portátil)
winget install SublimeHQ.SublimeText.4.Portable --interactive

# Instala Sublime Text 3
winget install SublimeHQ.SublimeText.3 --interactive

# Instala DBeaver Community Edition (Gratuito)
winget install dbeaver.dbeaver --interactive

# Instala DBeaver Enterprise Edition
winget install DBeaverCorp.DBeaverEnterpriseEdition --interactive

# Instala DBeaver CE via Microsoft Store
winget install 9PNKDR50694P --interactive

# Instala Postman
winget install Postman.Postman --interactive

# Instala Insomnia
winget install Insomnia.Insomnia --interactive

# Instala Figma
winget install Figma.Figma --interactive

# Instala Docker Desktop
winget install Docker.DockerDesktop --interactive

# Verificações Pós-Instalação do Docker
docker --version
docker run hello-world

# Instala Zoom
winget install --id Zoom.Zoom --interactive

# Instala PowerToys
winget install --id  Microsoft.PowerToys --interactive

# Instala MEGA Sync
winget install --id Mega.MEGAsync --interactive

# Istala o PowerShell
winget install --id Microsoft.PowerShell --interactive

# Atualiza todas as ferramentas instaladas via winget
winget upgrade --all
