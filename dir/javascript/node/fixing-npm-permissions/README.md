# Fixing NPM Permissions
**Author**: [NPM](https://docs.npmjs.com)  
**URL**: [Video](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
**Duration**: 05:09  

## Table Of Contents
1. [Changing Directory Owner](#changing-directory-owner) (00:32)
1. [](#) (00:32)
## +



## Changing Directory Owner

##### See all the files in a directory.  
Use the '-l' flag to show permissions.
```
$ ls -l
```

##### See what user you are running as
```
$ whoami
```

##### Change ownership of a file
```
$ sudo chown youuser file.txt
```

##### Default Directory (NPM)
/usr/local
```
$ npm config get prefix
```
##### Look at the permission of specific directory
```
$ ls -la /data/db
```

Change ownership, recursively,
```
$ sudo chown -R macbookpro /data/db
```
