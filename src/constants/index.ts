import { ProgramsInterface } from "../interfaces";

const programs: ProgramsInterface[] = [
  {
    name: "Visual Studio Code (VS Code)",
    id: "Microsoft.VisualStudioCode",
    description: "A lightweight and powerful source code editor by Microsoft.",
    source: "winget",
  },
  {
    name: "Trae",
    id: "ByteDance.Trae",
    description:
      "An adaptive AI IDE that transforms how you work, collaborating with you to run faster.",
    source: "winget",
  },
  {
    name: "Arduino IDE",
    id: "9NBLGGH4RSD8",
    description: "An open-source IDE for Arduino development.",
    source: "msstore",
  },
  {
    name: "Android Studio",
    id: "Google.AndroidStudio",
    description: "The official IDE for Android development by Google.",
    source: "winget",
  },
  {
    name: "Sublime Text 4",
    id: "SublimeHQ.SublimeText.4",
    description: "A sophisticated text editor for code, markup, and prose.",
    source: "winget",
  },
  {
    name: "Sublime Text 4 (Portable)",
    id: "SublimeHQ.SublimeText.4.Portable",
    description: "A portable version of the Sublime Text 4 editor.",
    source: "winget",
  },
  {
    name: "Sublime Text 3",
    id: "SublimeHQ.SublimeText.3",
    description: "The previous version of the Sublime Text editor.",
    source: "winget",
  },
  {
    name: "Anthropic Claude Code",
    id: "Anthropic.ClaudeCode",
    description:
      "A command-line AI coding assistant that lets developers delegate programming tasks directly from their terminal.",
    source: "winget",
  },
  {
    name: "Git",
    id: "Git.Git",
    description:
      "A distributed version control system for tracking changes in source code.",
    source: "winget",
  },
  {
    name: "GitHub Desktop",
    id: "GitHub.GitHubDesktop",
    description: "A desktop application to manage GitHub repositories.",
    source: "winget",
  },
  {
    name: "Node.js",
    id: "OpenJS.NodeJS.LTS",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    source: "winget",
  },
  {
    name: "DBeaver Community Edition (Free)",
    id: "DBeaver.DBeaver.Community",
    description: "A universal database management tool.",
    source: "winget",
  },
  {
    name: "DBeaver Enterprise Edition",
    id: "DBeaver.DBeaver.Enterprise",
    description:
      "The enterprise version of the DBeaver database management tool.",
    source: "winget",
  },
  {
    name: "Postman",
    id: "Postman.Postman",
    description: "A collaboration platform for API development.",
    source: "winget",
  },
  {
    name: "Insomnia",
    id: "Insomnia.Insomnia",
    description: "An HTTP client for testing and developing REST APIs.",
    source: "winget",
  },
  {
    name: "Figma",
    id: "Figma.Figma",
    description: "A web-based collaborative design tool.",
    source: "winget",
  },
  {
    name: "Docker Desktop",
    id: "Docker.DockerDesktop",
    description:
      "An application for building and sharing containerized applications.",
    source: "msstore",
  },
  {
    name: "Zoom",
    id: "Zoom.Zoom",
    description: "A platform for video conferencing and online meetings.",
    source: "winget",
  },
  {
    name: "PowerToys",
    id: "Microsoft.PowerToys",
    description:
      "A set of utilities for power users to tune and streamline their Windows experience.",
    source: "winget",
  },
  {
    name: "PowerShell",
    id: "Microsoft.PowerShell",
    description: "A command-line shell and scripting language by Microsoft.",
    source: "winget",
  },
  {
    name: "MEGA Sync",
    id: "Mega.MEGASync",
    description:
      "A file synchronization application for the MEGA cloud storage service.",
    source: "winget",
  },
  {
    name: "MiniTool Partition Wizard Free",
    id: "MiniTool.PartitionWizard.Free",
    description: "A free tool for managing disk partitions.",
    source: "winget",
  },
  {
    name: "JW Library",
    id: "9WZDNCRFJ3B4",
    description:
      "The official app of Jehovah's Witnesses for reading the Bible.",
    source: "msstore",
  },
  {
    name: "WhatsApp",
    id: "9NKSQGP7F2NH",
    description: "A messaging and voice/video calling application.",
    source: "msstore",
  },
  {
    name: "Unigram",
    id: "Telegram.Unigram",
    description: "An unofficial Telegram client for Windows.",
    source: "winget",
  },
  {
    name: "Gather",
    id: "Gather.Gather",
    description: "A video conferencing platform with virtual environments.",
    source: "winget",
  },
  {
    name: "MySQL Workbench",
    id: "Oracle.MySQLWorkbench",
    description:
      "A visual tool for database design and administration of MySQL databases.",
    source: "winget",
  },
  {
    name: "Raspberry Pi Imager",
    id: "RaspberryPiFoundation.RaspberryPiImager",
    description:
      "A tool to write operating system images to SD cards for Raspberry Pi.",
    source: "winget",
  },
  {
    name: "Azure CLI",
    id: "Microsoft.AzureCLI",
    description: "A command-line interface for managing Azure resources.",
    source: "winget",
  },
  {
    name: "AWS CLI",
    id: "Amazon.AWSCLI",
    description: "A command-line interface for managing AWS services.",
    source: "winget",
  },
  {
    name: "DigitalOcean CLI",
    id: "DigitalOcean.Doctl",
    description:
      "A command-line interface for managing DigitalOcean resources.",
    source: "winget",
  },
  {
    name: "HashiCorp Terraform",
    id: "HashiCorp.Terraform",
    description:
      "An infrastructure as code tool for building and managing cloud resources.",
    source: "winget",
  },
  {
    name: "Bitvise SSH Client",
    id: "Bitvise.SSH.Client",
    description: "An SSH client for Windows with SFTP support.",
    source: "winget",
  },
  {
    name: "PostgreSQL ODBC Driver",
    id: "PostgreSQL.psqlODBC",
    description: "An ODBC driver for connecting to PostgreSQL databases.",
    source: "winget",
  },

  {
    name: "Mikrotik Winbox Beta",
    id: "Mikrotik.Winbox.Beta",
    description: "A configuration tool for Mikrotik devices.",
    source: "winget",
  },
  {
    name: "AnyDesk",
    id: "AnyDeskSoftwareGmbH.AnyDesk",
    description: "A remote desktop software for accessing computers remotely.",
    source: "winget",
  },
  {
    name: "Redis Insight",
    id: "XP8K1GHCB0F1R2",
    description: "A management and visualization tool for Redis data.",
    source: "winget",
  },
  {
    name: "Oracle VirtualBox",
    id: "Oracle.VirtualBox",
    description: "A powerful x86 and AMD64/Intel64 virtualization product.",
    source: "winget",
  },
  {
    name: "HashiCorp Vagrant",
    id: "HashiCorp.Vagrant",
    description:
      "A tool for building and managing virtualized development environments.",
    source: "winget",
  },

  {
    name: "spacedesk Driver",
    id: "Datronicsoft.SpacedeskDriver.Server",
    description:
      "A Windows driver for spacedesk software to turn mobile devices, laptops and desktops into an additional extension display monitor for Windows machines.",
    source: "winget",
  },
  {
    name: "spacedesk",
    id: "9NBLGGH4TRM4",
    description:
      "spacedesk software turns mobile devices, laptops and desktops into an additional extension display monitor for Windows machines. Windows can smoothly be moved to and from other connected monitors.",
    source: "msstore",
  },
  {
    name: "Oracle JDK 24",
    id: "Oracle.JDK.24",
    description:
      "A development environment for building applications, applets, and components using the Java programming language.",
    source: "winget",
  },
  {
    name: "Warp",
    id: "Warp.Warp",
    description: "A modern, Rust-based terminal with AI-powered features.",
    source: "winget",
  },
  {
    name: "Ollama",
    id: "Ollama.Ollama",
    description:
      "​Ollama is a tool that enables you to run large language models (LLMs) directly on your local machine, offering benefits such as enhanced privacy, speed, and control without relying on internet connectivity.",
    source: "winget",
  },
  {
    name: "LM Studio",
    id: "ElementLabs.LMStudio",
    description:
      "​LM Studio is a desktop application developed by Element Labs Inc. that allows users to discover, download, and run large language models (LLMs) locally on their computers.",
    source: "winget",
  },
  {
    name: "Google Drive",
    id: "Google.GoogleDrive",
    description:
      "A file storage and synchronization service developed by Google.",
    source: "winget",
  },
  {
    name: "LocalSend",
    id: "LocalSend.LocalSend",
    description:
      "A simple, open-source file transfer tool for sharing files across devices on the same network.",
    source: "winget",
  },
];

export const CONSTANTS = {
  programs,
};
