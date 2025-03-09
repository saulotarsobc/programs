import { DataInterface } from "../interfaces";

const data: DataInterface[] = [
  {
    name: "Visual Studio Code (VS Code)",
    id: "Microsoft.VisualStudioCode",
    shortDescription: "Editor de código-fonte leve e poderoso da Microsoft.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Git",
    id: "Git.Git",
    shortDescription: "Sistema de controle de versão distribuído.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "GitHub Desktop",
    id: "GitHub.GitHubDesktop",
    shortDescription:
      "Aplicativo de desktop para gerenciar repositórios GitHub.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Node.js",
    id: "OpenJS.NodeJS.LTS",
    shortDescription: "Ambiente de execução JavaScript server-side.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Sublime Text 4",
    id: "SublimeHQ.SublimeText.4",
    shortDescription:
      "Editor de texto sofisticado para código, marcação e prosa.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Sublime Text 4 (Portátil)",
    id: "SublimeHQ.SublimeText.4.Portable",
    shortDescription: "Versão portátil do editor de texto Sublime Text 4.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Sublime Text 3",
    id: "SublimeHQ.SublimeText.3",
    shortDescription: "Versão anterior do editor de texto Sublime Text.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "DBeaver Community Edition (Gratuito)",
    id: "DBeaver Community Edition",
    shortDescription:
      "Ferramenta de gerenciamento de banco de dados universal.",
    source: "winget",
    interactive: true,
    type: "--name",
  },
  {
    name: "DBeaver Enterprise Edition",
    id: "DBeaver Enterprise Edition",
    shortDescription:
      "Versão empresarial da ferramenta de gerenciamento de banco de dados DBeaver.",
    source: "winget",
    interactive: true,
    type: "--name",
  },
  {
    name: "Postman",
    id: "Postman.Postman",
    shortDescription: "Ferramenta de colaboração para desenvolvimento de APIs.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Insomnia",
    id: "Insomnia.Insomnia",
    shortDescription: "Cliente HTTP para teste e desenvolvimento de APIs REST.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Figma",
    id: "Figma.Figma",
    shortDescription: "Ferramenta de design colaborativo baseada na web.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Docker Desktop",
    id: "Docker.DockerDesktop",
    shortDescription:
      "Aplicativo para construir e compartilhar aplicativos em contêineres.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Zoom",
    id: "Zoom.Zoom",
    shortDescription: "Plataforma de videoconferência e reuniões online.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PowerToys",
    id: "Microsoft.PowerToys",
    shortDescription:
      "Conjunto de utilitários para usuários avançados do Windows.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PowerShell",
    id: "Microsoft.PowerShell",
    shortDescription:
      "Shell de linha de comando e linguagem de script da Microsoft.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MEGA Sync",
    id: "Mega.MEGASync",
    shortDescription:
      "Aplicativo de sincronização de arquivos com a nuvem MEGA.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MiniTool Partition Wizard Free",
    id: "MiniTool.PartitionWizard.Free",
    shortDescription:
      "Ferramenta gratuita de gerenciamento de partições de disco.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "JW Library",
    id: "JW Library",
    shortDescription:
      "Aplicativo oficial das Testemunhas de Jeová para leitura da Bíblia.",
    source: "msstore",
    interactive: false,
    type: "--name",
  },
  {
    name: "WhatsApp",
    id: "whatsapp",
    shortDescription: "Aplicativo de mensagens e chamadas de voz e vídeo.",
    source: "msstore",
    interactive: false,
    type: "--name",
  },
  {
    name: "Unigram",
    id: "Telegram.Unigram",
    shortDescription: "Cliente não oficial do Telegram para Windows.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Gather",
    id: "Gather.Gather",
    shortDescription: "Plataforma de videoconferência com ambientes virtuais.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MySQL Workbench",
    id: "Oracle.MySQLWorkbench",
    shortDescription:
      "Ferramenta visual para administração de bancos de dados MySQL.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Raspberry Pi Imager",
    id: "RaspberryPiFoundation.RaspberryPiImager",
    shortDescription:
      "Ferramenta para gravar sistemas operacionais em cartões SD para Raspberry Pi.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Azure CLI",
    id: "Microsoft.AzureCLI",
    shortDescription:
      "Interface de linha de comando para gerenciar recursos do Azure.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "AWS CLI",
    id: "Amazon.AWSCLI",
    shortDescription:
      "Interface de linha de comando para gerenciar serviços da AWS.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Bitvise SSH Client",
    id: "Bitvise.SSH.Client",
    shortDescription: "Cliente SSH para Windows com suporte a SFTP.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PostgreSQL ODBC Driver",
    id: "PostgreSQL.psqlODBC",
    shortDescription:
      "Driver ODBC para conectar-se a bancos de dados PostgreSQL.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "DigitalOcean CLI",
    id: "DigitalOcean.Doctl",
    shortDescription:
      "Interface de linha de comando para gerenciar recursos do DigitalOcean.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Mikrotik Winbox Beta",
    id: "Mikrotik.Winbox.Beta",
    shortDescription: "Ferramenta de configuração para dispositivos Mikrotik.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "AnyDesk",
    id: "AnyDeskSoftwareGmbH.AnyDesk",
    shortDescription: "Software de acesso remoto para computadores.",
    source: "winget",
    interactive: true,
    type: "--id",
  },

  {
    name: "Redis Insight",
    id: "Redis Insight",
    shortDescription:
      "Ferramenta de gerenciamento e visualização de dados Redis.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
];

export const CONSTANTS = {
  data: data,
};
