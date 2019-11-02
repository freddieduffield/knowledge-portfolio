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

[list remote branches](http://gitready.com/intermediate/2009/02/13/list-remote-branches.html)

`git branch -a` - all branches 

`git branch -r` - only remote branches

`git branch -D branchName` - delete local branch

`git branch -m oldName newName` - rename branch

---
## Fetch 
fetches refs (branches and / or tags) for a repository, along with all objects needed to complete their histories

```
git fetch
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

---
## Push directory to git hub

Pushing to a new git hub repo (create repo on git hub first)

```
git remote add origin git@github.com:FrederickFoxxx/knowledge-portfolio.git
git push -u origin master
```
