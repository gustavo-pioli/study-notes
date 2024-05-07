# Anotações sobre comandos do git

**Criação de novos repositórios**
1. git init
1. git add . (todos os arquivos)
1. No git hub
1. Your repositories
1. New repository
1. Pressione Createn Repository
1. Voltando ao git bash para vincular os repositorio local com o github
1. git remote add origin "link do repositorio online"
1. git push --set-upstream origin master

**Vizualizar situação do commit**
- git status

**Vizualizar histórico do repositório (resumo)**
- git log --oneline

**Procedimento padrão de commit**
1. git status
1. git add . (todos os arquivos)
1. git commit -m "Mensagem significativa"
1. git push
- último comando envia para respositorio online vinculado

**Remover arquivo do estado staged**
- git rm --cached "arquivo"

**Ignorar arquivo já conhecido pelo repositório**
- git update-index --skip-worktree "arquivo"

**Criar e deslocar para nova branch**
- git checkout -b "Nome Branch"
- Termo "-b" para criar a branch (retire-o para apenas mover entre branchs)

**Merge de branchs**
- git checkout "Branch que receberá o merge"
- git merge "Branch à ser integrada"

