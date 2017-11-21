Ruby On Rails In 60 Minutes
https://youtu.be/pPy0GQJLZUM

------------------------------------------------------  
1. Installation (Mac)
------------------------------------------------------  


## INSTALL (Attempt 1)
This is the suggested way to install but this did not work due to the fact I was running mac OS Sierra v10.12.4.
[Rails Installer](http://railsinstaller.org/en).



## INSTALL (Attempt 2)
[Setup Ruby On Rails on macOS 10.12 Sierra](https://gorails.com/setup/osx/10.12-sierra).

Install Homebrew
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```  

Install Ruby & [Rbenv](https://github.com/sstephenson/rbenv)
```
$ brew install rbenv ruby-build
```

Install Ruby
```
$ rbenv install 2.4.0
$ rbenv install 2.4.1
```

Install Rails
```
sudo gem install rails -v 5.0.1
```
ERROR:  Error installing rails: activesupport requires Ruby version >= 2.2.2.
[How to update Ruby Version 2.0.0 to the latest version in Mac OSX Yosemite?](https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite).

[Rails install fails: activesupport requires Ruby version >= 2.2.2](https://stackoverflow.com/questions/38515733/rails-install-fails-activesupport-requires-ruby-version-2-2-2)






Ruby  (video: 2.2, local: 2.0)
```
ruby -v
```  

Rails (video: 4.2, local: 4.1)
```
rails -v
```  

GEMS (video:2.4, local:2.0)
```
gem -v
```  

Bundler (video:1.11, local:1.15)
```
bundler -v
```  
