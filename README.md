```markdown
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
winget install --id Git.Git --interactive
```

---

## 3. **GitHub Desktop**

Instala o GitHub Desktop:

```bash
winget install --id GitHub.GitHubDesktop --interactive
```

---

## 4. **Node.js**

Instala o Node.js (LTS):

```bash
winget install --id OpenJS.NodeJS.LTS --interactive
```

---

## 5. **Sublime Text**

Instala o Sublime Text. Pode escolher entre várias versões.

### Sublime Text 4:

```bash
winget install SublimeHQ.SublimeText.4 --interactive
```

### Sublime Text 4 (Portátil):

```bash
winget install SublimeHQ.SublimeText.4.Portable --interactive
```

### Sublime Text 3:

```bash
winget install SublimeHQ.SublimeText.3 --interactive
```

---

## 6. **DBeaver**

Instala o DBeaver para gerenciamento de bancos de dados.

### DBeaver Community Edition (Gratuito):

```bash
winget install dbeaver.dbeaver --interactive
```

### DBeaver Enterprise Edition:

```bash
winget install DBeaverCorp.DBeaverEnterpriseEdition --interactive
```

### DBeaver CE via Microsoft Store:

```bash
winget install 9PNKDR50694P --interactive
```

---

## 7. **Postman**

Instala o Postman para testes de APIs:

```bash
winget install Postman.Postman --interactive
```

---

## 8. **Insomnia**

Instala o Insomnia, uma alternativa ao Postman para testes de APIs:

```bash
winget install Insomnia.Insomnia --interactive
```

---

## 9. **Figma**

Instala o Figma para design colaborativo:

```bash
winget install Figma.Figma --interactive
```

---

## 10. **Docker Desktop**

Instala o Docker Desktop para criação e gerenciamento de contêineres:

```bash
winget install Docker.DockerDesktop --interactive
```

---

# Verificações Pós-Instalação

- **Verificar versão do Docker**:
  ```bash
  docker --version
  ```

- **Executar um contêiner de teste no Docker**:
  ```bash
  docker run hello-world
  ```

---

# Atualizações

Para atualizar todas as ferramentas instaladas via `winget`, execute:

```bash
winget upgrade --all
```
