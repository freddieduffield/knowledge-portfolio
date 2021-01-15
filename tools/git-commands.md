# Git Commands

 - [docs](https://git-scm.com/doc)
----
## Add 
adds files one by one asking for your approval for each. It gives you a choice whether to add it or not. 

```
git add -p
```
---
## Branch 
`git branch` - list local branches

[list remote branches](http://gitready.com/intermediate/2009/02/13/list-remote-branches.html)

`git branch -a` - all branches 

`git branch -r` - only remote branches

`git branch -D branchName` - delete local branch

`git branch -m oldName newName` - rename branch

---
## Checkout

create new branch
```
git checkout -b <branch-name>
```

discard changes in working directory
```
git checkout -- <filename>
```

---
## Clean
`git clean -d -i` - interactively clean untracked files and directories. can go through one by one if wished.
`git clean -fd` - removed untracked directories 
`git clean -xf` - removed untracked and ignored files from your git repo.

---
## Commit

change last commit message 
```
git commit --amend 
```

add staged edits to previous commit without changing the commit message
```
git commit --amend --no-edit
```

---
## Diff

compare a file on different two branches
```
git diff mybranch master -- myfile.js
```

When there has been a revert compare the original and revert

```
git diff <original commit hash> origin/<commit hash of revert> 
```

---
## Fetch 
fetches refs (branches and / or tags) for a repository, along with all objects needed to complete their histories

```
git fetch
```
---
## Log

Get a graph of commit history, helpful with merges etc. 

```
git log --graph --decorate --all
```

```
git reflog
```
---

## Merge

Stop a merge halfway through. 

```
git merge --abort
```
---
## Rebase
brings branch upto date with specificed branch. eg. adds changes made on feature branch to the end of the changes made to master.

```
git rebase master
```
---
## Reset
when someone has made an ammendment to a commit and you pull the branch and get a merge conflict 

```
git reset --hard origin/branchName
```

--- 
## Revert




---
## Stash

```
git stash
```
Save changes for later without committing

```
git stash apply
```
Pulls latest stash on working branch

```
git stash clear
```
Removes latest stash. Can use to get rid of all unstage changes if used after a stash 

```
git stash list
```
list previous stashes 

```
git stash apply stash@{1} 
```
Apply the changes from a specific stash

---
## Push directory to git hub

Pushing to a new git hub repo (create repo on git hub first)

```
git remote add origin git@github.com:freddieduffield/problems.git
git branch -M main
git push -u origin main
```
---
## Remove git from a repo

```
rm -rf .git
```

---
## Misc

Link to a specific commit or branch from package json 

```zsh
npm install --save username/repo#branch-name-or-commit-or-tag
```
