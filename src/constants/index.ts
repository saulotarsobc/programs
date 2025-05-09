import { ProgramsInterface } from "../interfaces";

const programs: ProgramsInterface[] = [
  {
    name: "Visual Studio Code (VS Code)",
    id: "Microsoft.VisualStudioCode",
    shortDescription:
      "A lightweight and powerful source code editor by Microsoft.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Trae",
    id: "ByteDance.Trae",
    shortDescription:
      "An adaptive AI IDE that transforms how you work, collaborating with you to run faster.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Arduino IDE",
    id: "9NBLGGH4RSD8",
    shortDescription: "An open-source IDE for Arduino development.",
    source: "msstore",
    interactive: false,
    type: "--id",
  },
  {
    name: "Android Studio",
    id: "Google.AndroidStudio",
    shortDescription: "The official IDE for Android development by Google.",
    source: "winget",
    interactive: true,
    type: "--id",
  },

  {
    name: "Sublime Text 4",
    id: "SublimeHQ.SublimeText.4",
    shortDescription:
      "A sophisticated text editor for code, markup, and prose.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Sublime Text 4 (Portable)",
    id: "SublimeHQ.SublimeText.4.Portable",
    shortDescription: "A portable version of the Sublime Text 4 editor.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Sublime Text 3",
    id: "SublimeHQ.SublimeText.3",
    shortDescription: "The previous version of the Sublime Text editor.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Git",
    id: "Git.Git",
    shortDescription:
      "A distributed version control system for tracking changes in source code.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "GitHub Desktop",
    id: "GitHub.GitHubDesktop",
    shortDescription: "A desktop application to manage GitHub repositories.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Node.js",
    id: "OpenJS.NodeJS.LTS",
    shortDescription:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "DBeaver Community Edition (Free)",
    id: "DBeaver Community Edition",
    shortDescription: "A universal database management tool.",
    source: "winget",
    interactive: true,
    type: "--name",
  },
  {
    name: "DBeaver Enterprise Edition",
    id: "DBeaver Enterprise Edition",
    shortDescription:
      "The enterprise version of the DBeaver database management tool.",
    source: "winget",
    interactive: true,
    type: "--name",
  },
  {
    name: "Postman",
    id: "Postman.Postman",
    shortDescription: "A collaboration platform for API development.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Insomnia",
    id: "Insomnia.Insomnia",
    shortDescription: "An HTTP client for testing and developing REST APIs.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Figma",
    id: "Figma.Figma",
    shortDescription: "A web-based collaborative design tool.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Docker Desktop",
    id: "Docker.DockerDesktop",
    shortDescription:
      "An application for building and sharing containerized applications.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Zoom",
    id: "Zoom.Zoom",
    shortDescription: "A platform for video conferencing and online meetings.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PowerToys",
    id: "Microsoft.PowerToys",
    shortDescription:
      "A set of utilities for power users to tune and streamline their Windows experience.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PowerShell",
    id: "Microsoft.PowerShell",
    shortDescription:
      "A command-line shell and scripting language by Microsoft.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MEGA Sync",
    id: "Mega.MEGASync",
    shortDescription:
      "A file synchronization application for the MEGA cloud storage service.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MiniTool Partition Wizard Free",
    id: "MiniTool.PartitionWizard.Free",
    shortDescription: "A free tool for managing disk partitions.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "JW Library",
    id: "9WZDNCRFJ3B4",
    shortDescription:
      "The official app of Jehovah's Witnesses for reading the Bible.",
    source: "msstore",
    interactive: false,
    type: "--name",
  },
  {
    name: "WhatsApp",
    id: "9NKSQGP7F2NH",
    shortDescription: "A messaging and voice/video calling application.",
    source: "msstore",
    interactive: false,
    type: "--id",
  },
  {
    name: "Unigram",
    id: "Telegram.Unigram",
    shortDescription: "An unofficial Telegram client for Windows.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Gather",
    id: "Gather.Gather",
    shortDescription:
      "A video conferencing platform with virtual environments.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "MySQL Workbench",
    id: "Oracle.MySQLWorkbench",
    shortDescription:
      "A visual tool for database design and administration of MySQL databases.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Raspberry Pi Imager",
    id: "RaspberryPiFoundation.RaspberryPiImager",
    shortDescription:
      "A tool to write operating system images to SD cards for Raspberry Pi.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Azure CLI",
    id: "Microsoft.AzureCLI",
    shortDescription: "A command-line interface for managing Azure resources.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "AWS CLI",
    id: "Amazon.AWSCLI",
    shortDescription: "A command-line interface for managing AWS services.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "DigitalOcean CLI",
    id: "DigitalOcean.Doctl",
    shortDescription:
      "A command-line interface for managing DigitalOcean resources.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "HashiCorp Terraform",
    id: "HashiCorp.Terraform",
    shortDescription:
      "An infrastructure as code tool for building and managing cloud resources.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Bitvise SSH Client",
    id: "Bitvise.SSH.Client",
    shortDescription: "An SSH client for Windows with SFTP support.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "PostgreSQL ODBC Driver",
    id: "PostgreSQL.psqlODBC",
    shortDescription: "An ODBC driver for connecting to PostgreSQL databases.",
    source: "winget",
    interactive: true,
    type: "--id",
  },

  {
    name: "Mikrotik Winbox Beta",
    id: "Mikrotik.Winbox.Beta",
    shortDescription: "A configuration tool for Mikrotik devices.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "AnyDesk",
    id: "AnyDeskSoftwareGmbH.AnyDesk",
    shortDescription:
      "A remote desktop software for accessing computers remotely.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Redis Insight",
    id: "Redis Insight",
    shortDescription: "A management and visualization tool for Redis data.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Oracle VirtualBox",
    id: "Oracle.VirtualBox",
    shortDescription:
      "A powerful x86 and AMD64/Intel64 virtualization product.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "HashiCorp Vagrant",
    id: "HashiCorp.Vagrant",
    shortDescription:
      "A tool for building and managing virtualized development environments.",
    source: "winget",
    interactive: true,
    type: "--id",
  },

  {
    name: "spacedesk Driver",
    id: "Datronicsoft.SpacedeskDriver.Server",
    shortDescription:
      "A Windows driver for spacedesk software to turn mobile devices, laptops and desktops into an additional extension display monitor for Windows machines.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "spacedesk",
    id: "9NBLGGH4TRM4",
    shortDescription:
      "spacedesk software turns mobile devices, laptops and desktops into an additional extension display monitor for Windows machines. Windows can smoothly be moved to and from other connected monitors.",
    source: "msstore",
    interactive: false,
    type: "--id",
  },
  {
    name: "Oracle JDK 24",
    id: "Oracle.JDK.24",
    shortDescription:
      "A development environment for building applications, applets, and components using the Java programming language.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Warp",
    id: "Warp.Warp",
    shortDescription: "A modern, Rust-based terminal with AI-powered features.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "Ollama",
    id: "Ollama.Ollama",
    shortDescription:
      "​Ollama is a tool that enables you to run large language models (LLMs) directly on your local machine, offering benefits such as enhanced privacy, speed, and control without relying on internet connectivity.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
  {
    name: "LM Studio",
    id: "ElementLabs.LMStudio",
    shortDescription:
      "​LM Studio is a desktop application developed by Element Labs Inc. that allows users to discover, download, and run large language models (LLMs) locally on their computers.",
    source: "winget",
    interactive: true,
    type: "--id",
  },
];

export const CONSTANTS = {
  programs,
};
