# Git Commands

[docs](https://git-scm.com/doc)

# Add 
adds files one by one asking for your approval for each. It gives you a choice whether to add it or not. 

```
git add -p
```

# Fetch 
fetches refs (branches and / or tags) for a repository, along with all objects needed to complete their histories

```
git fetch
```

# Branch 

`git branch -r` - only remote branches

`git branch -a` - all branches 

[list remote branches](http://gitready.com/intermediate/2009/02/13/list-remote-branches.html)


# Push directory to git hub

Pushing to a new git hub repo (create repo on git hub first)

```
git remote add origin git@github.com:FrederickFoxxx/knowledge-portfolio.git
git push -u origin master
```