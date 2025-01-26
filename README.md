# Comandos para Instalar Ferramentas de Desenvolvimento no Windows

Este documento contém os comandos para instalar diversas ferramentas essenciais para o desenvolvimento no Windows utilizando o `winget`.

---

## 1. **Visual Studio Code (VS Code)**

Instala o Visual Studio Code:

```bash
winget install --id Microsoft.VisualStudioCode
```

---

## 2. **Git**

Instala o Git:

```bash
winget install --id Git.Git -i
```

---

## 3. **GitHub Desktop**

Instala o GitHub Desktop:

```bash
winget install --id GitHub.GitHubDesktop -i
```

---

## 4. **Node.js**

Instala o Node.js (LTS):

```bash
winget install --id OpenJS.NodeJS.LTS -i
```

---

## 5. **Sublime Text**

Instala o Sublime Text. Pode escolher entre várias versões.

### Sublime Text 4:

```bash
winget install SublimeHQ.SublimeText.4 -i
```

### Sublime Text 4 (Portátil):

```bash
winget install SublimeHQ.SublimeText.4.Portable -i
```

### Sublime Text 3:

```bash
winget install SublimeHQ.SublimeText.3 -i
```

---

## 6. **DBeaver**

Instala o DBeaver para gerenciamento de bancos de dados.

### DBeaver Community Edition (Gratuito):

```bash
winget install dbeaver.dbeaver -i
```

### DBeaver Enterprise Edition:

```bash
winget install DBeaverCorp.DBeaverEnterpriseEdition -i
```

### DBeaver CE via Microsoft Store:

```bash
winget install 9PNKDR50694P -i
```

---

## 7. **Postman**

Instala o Postman para testes de APIs:

```bash
winget install Postman.Postman -i
```

---

## 8. **Insomnia**

Instala o Insomnia, uma alternativa ao Postman para testes de APIs:

```bash
winget install Insomnia.Insomnia -i
```

---

## 9. **Figma**

Instala o Figma para design colaborativo:

```bash
winget install Figma.Figma -i
```

---

## 10. **Docker Desktop**

Instala o Docker Desktop para criação e gerenciamento de contêineres:

```bash
winget install Docker.DockerDesktop -i
```

### Verificações Pós-Instalação

- **Verificar versão do Docker**:

  ```bash
  docker --version
  ```

- **Executar um contêiner de teste no Docker**:
  ```bash
  docker run hello-world
  ```

---

## 11. **Zoom**

Instala o Zoom para videoconferências:

```bash
winget install --id Zoom.Zoom -i
```

---

## 12. **PowerToys**

Instala o PowerToys para adicionar utilitários ao Windows:

```bash
winget install Microsoft.PowerToys -i
```

---

## 13. **PowerShell**

Instala o PowerShell:

```bash
winget install --id Microsoft.PowerShell -i
```

---

## 13. **MEGA Sync**

Instala o MEGA Sync para sincronização de arquivos:

```bash
winget install Mega.MEGASync -i
```

---

## 14. **MiniTool Partition Wizard Free**

Instala o MiniTool Partition Wizard Free para gerenciamento de partições:

```bash
winget install MiniTool.PartitionWizard.Free -i
```

---

## 15. **JW Library**

Instala o JW Library:

```bash
winget install "JW Library" -s msstore -i
```

---

## 16. **WhatsApp**

Instala o WhatsApp:

```bash
winget install "WhatsApp" -s msstore -i
```

---

## 17. **Unigram**

Instala o Unigram, um cliente do Telegram para Windows:

```bash
winget install Telegram.Unigram -i
```

---

## 18. **Gather**

Instala o Gather, um aplicativo de reunião para Windows:

```bash
winget install Gather.Gather -i
```

---

## 19. **MySQL Workbench**

Instala o MySQL Workbench para design e gerenciamento de banco de dados:

```bash
winget install Oracle.MySQLWorkbench -i
```

---

## 20. **Raspberry Pi Imager**

Instala o Raspberry Pi Imager:

```bash
winget install --id RaspberryPiFoundation.RaspberryPiImager -i
```

---

## 21. **Azure CLI**

Instala o Azure CLI:

```bash
winget install --id Microsoft.AzureCLI -i
```

---

## 22. **AWS CLI**

Instala o AWS CLI:

```bash
winget install --id Amazon.AWSCLI -i
```

---

## 23. Bitvise SSH Client

Instalar o Bitvise Client

```bash
winget insatll --id Bitvise.SSH.Client -i
```

```bash
winget insatll --id PostgreSQL.psqlODBC -i
```

```bash
winget install --id 'DigitalOcean.Doctl' -i
```

```bash
winget install --id Mikrotik.Winbox.Beta -i;
```

## Atualizações

Para atualizar todas as ferramentas instaladas via `winget`, execute:

```bash
winget upgrade --all
```
