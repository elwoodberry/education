# ExpressJS Crash Course
**Author**: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)  
**URL**: [Video](https://youtu.be/SWYqp7iY_Tc)  
**Duration**: 32:41    
**Donate to Author**: [Patreon](https://www.patreon.com/traversymedia)  

## Table Of Contents
1. [What is GIT](#what-is-git) (00:37)
1. [Concepts of GIT](#concepts-of-git) (02:19)
1. [Basic Commands](#basic-commands) (03:17)
1. [Installing GIT](#installing-git) (05:45)
1. [Getting Started](#getting-started) (07:25)
1. [Using GIT ignore](#using-git-ignore) (18:17)
1. [Branches](#branches) (21:55)
1. [Errors](#errors)
1. [Without Histories](#without-histories)
## +


##What is GIT
Version Control System (VCS) for tracking changes on computer files.
1. Distributed version control
1. Coordinates work between multiple developers
1. Who made what changes and when
1. Revert back at any time
1. Local & remote repos

## Concepts of GIT
1. Keeps track of code history
1. Takes snapshots of your files
1. You decide when to take a snapshot by making a commit
1. You can visit any snapshot at any time
1. You can stage files before committing

## Basic Commands
Initialize local GIT repository
```
$ git init
```
Add files to index
```
$ git add <file>
```
Check status of working tree
```
$ git status
```
Commit changes to repository
```
$ git commit
```
Push to remote repository
```
$ git push
```
Pull latest from remote repository
```
$ git pull
```
Clone repository into a new directory
```
$ git clone
```
## Installing GIT
1. Linux (Debian)
    ```
    $ sudo apt-get install git
    ```
2. Linux (Fedora)
    ```
    $ sudo yum install git
    ```
3. [Mac](http://git-scm/download/mac)
4. [Windows](http://git-scm/download/win)
## Getting Started
1. (09:42) Create a new folder ('sample-app')
    ```
    mkdir sample-app
    ```
2. Create some files in the folder
    **'index.html'**
    ```
    touch sample-app/index.html
    ```
    **'app.js'**
    ```
    touch sample-app/app.js
    ```
3. Create some sample code for index.html
    ```
    <!DOCTYPE html>
    <html>
    <head>
    	<title>Sample GIT Project</title>
    </head>
    <body>
    <h1>This is my project</h1>
    </body>
    </html>
    ```

4. Initialize 'sample-app' as a GIT repository.
    ```
    $ git init
    ```
5. Show hidden files on a mac
    ```
    $ defaults write com.apple.finder AppleShowAllFiles YES
    ```
6. Add name and email address to GIT
    **Name**
    ```
    $ git config --global user.name 'Elwood Berry'
    ```
    **Email**
    ```
    $ git config --global email.name 'me@elwoodberry.com'
    ```
7. Add 'index.html' to staging area.
    ```
    $ git add index.html
    ```
8. Get the status on what is in the staging area.
    ```
    $ git status
    ```
9. Remove 'index.html' from staging area
    ```
    $ git rm --cached index.html
    ```
10. Add all HTML files.
    ```
    $ git add *.html
    ```
11. Add everything
    ```
    $ git add .
    ```
12. Commit files.
    Opens the VIM editor
    ```
    $ git commit
    ```
     - Click 'i' to switch the VIM to 'insert' mode.
     - Click [esc] key to exit 'insert' mode.
     - Type ':wq' to exit the VIM editor.

13. Create some sample code for app.js
    ```
    console.log('You win some, you lose some...');
    ```

14. Commit files.
    ```
    $ git commit -m 'Updated app.js'
    ```

## Using GIT ignore
Create an 'ignore' file.
```
$ touch .gitignore
```

Create a file to be ignored.
```
$ touch references.md
```

## Branches
Create a branch.
```
$ git branch fnctnLogin
```
Switch branches.
```
$ git checkout fnctnLogin
```
Create a new file.
```
$ touch login.js
```
Add and commit
```
$ git add .
```
Commit Files
```
$ git commit -m 'added login file.'
```
Merge branches.
```
$ git merge fnctnLogin
```


## Remote Repositories
1. Log in to [Github](github.com).
2. Create a new repository
3. List remote repositories.
    ```
    $ git remote
    ```
4. Add a remote repository
    ```
    $ git remote add origin https://github.com/elwoodberry/githubtest.git
    ```
5. Push to the 'origin' master branch.
    ```
    $ git push -u origin master
    ```

## Errors

Updates were rejected because the remote contains work that you do not have locally. This is usually caused by another repository pushing to the same ref. You may want to first integrate the remote changes (e.g., 'git pull ...') before pushing again. See the 'Note about fast-forwards' in 'git push --help' for details.

## Without Histories
[Github “Updates were rejected because the remote contains work...”](https://stackoverflow.com/questions/18328800/github-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-h)  
```
$ git pull origin master  
```
