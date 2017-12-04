# Google Cloud Platform  


## Table of Contents
1. [Setting Up A New Project](#setting-up-a-new-project)
1. [Create The Front End Instance](#create-the-front-end-instance)
1. [Setting Up The New Instance](#setting-up-the-new-instance)
1. [Cloning The Repository](#cloning-the-repository)
---





## Setting Up A New Project  
We will assume you have (1) **created an account** and (2) **set up your billing** for your **Google Cloud Platform** account. From the [Google Cloud Platform](https://cloud.google.com/) main website.  

1. Click '**Go To Console**'  
2. From the dropdown, click '**Create Project**'  





## Create the Front End Instance
Once you have created the a new project you will find yourself on the dashboard of the new project.  

1. In the top left corner, there is a hamburger icon, click the icon
2. It will reveal a menu of Google Platform tools. Find the 'Compute' section and click **Compute Engine**
3. Click 'Create Instance'

| Attributes   | .   |
| -------------: |:-------------|
| Name:      | '###-frontend' |
| Zone:      | 'us-east1-b'      |
| Machine Type: | 'micro'      |
| Boot Disk: | 'Ubuntu 14.04 LTS'      |
| Firewall: | 'Allow HTTP', 'Allow HTTPS'      |

4. Click Create





## Setting up the new instance
We are going to [SSH](https://en.wikipedia.org/wiki/Secure_Shell) into the new instance and setup the basics to run the project.

1. Get Updates  
	```
	$ sudo apt-get update  
	```

2. Install [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node.js](https://nodejs.org/en/download/package-manager/) and [NPM](http://blog.npmjs.org/post/85484771375/how-to-install-npm)  
	```
	$ sudo apt-get install git nodejs npm
	```





## Cloning The Repository

1. Clone the Repository
	```  
	$ git clone https://github.com/####/####.git
	```  

2. Change Directory to the '####' directory
	```
	$ cd ####
	```  
