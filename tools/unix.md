# Unix

## Changing Access Permissions
`chmod u+x` - make executable

## write command to file 
```
npm audit > out.txt
``` 
 
## cat
* show contents of file 
  ```Bash
  cat myFile.txt
  ```
* add text a file
  ```Bash
  cat >> myFile.txt << EOF
  ...type text...
  EOF
  ```
## chmod
`chmod u+x` - make executable 
## mv
* rename file 
```Bash
mv filename.txt newfilename.txt
```
* move a file to a new directory
```Bash
mv ./Downloads/lecture-79-challenge.txt ./curriculum/1907-0208-2020
```
## tail -f /path/to.log
show logs as they come out.

## touch 
* create a file
```
touch <name>
```

## mkdir
* create a directory 
```
mkdir <name>
```

## systemctl

 to control the systemd system and service
 
 Start / stop a service
```
sudo systemctl start mysql.service
sudo systemctl stop mysql.service
```
## SIGINT

* signal sent by `ctrl + c` to interupt the process

## SIGTERM
* signal used to administratively terminate process, usual coming from `kill`, `pkill`, `killall`

## tail
List the last few lines of a file particularily useful for log files
 
```
tail -f
```

## less
displays paginated file output, can be navigated. Useful for large files
```
less <filename>
```
# bash

switch permenantly to bash `chsh -s /bin/bash`
switch permenantly to bash `chsh -s /bin/zsh`

## $(...)
excute a command, i.e. complete this first before the rest of the line

## "${STRING-INTERPOLATION}"

```sh
echo $(pwd)/myFile.txt
# => my/path/myfile
```

## tr 
used to transform string or 
