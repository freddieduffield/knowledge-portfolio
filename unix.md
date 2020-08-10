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
## mv
* rename file 
```Bash
mv filename.txt newfilename.txt
```
* move a file to a new directory
  ```Bash
  mv ./Downloads/lecture-79-challenge.txt ./curriculum/1907-0208-2020
  ```

## touch 
* create a file

## mkdir
* create a directory 


# bash

switch permenantly to bash `chsh -s /bin/bash`
switch permenantly to bash `chsh -s /bin/zsh`

## $(...)
excute a command, i.e. complete this first before the rest of the line

```sh
echo $(pwd)/myFile.txt
# => my/path/myfile
```

## tr 
used to transform string or 

## "${STRING-INTERPOLATION}"

## systemctl

 to control the systemd system and service
 
 Start / stop a service
```bash
sudo systemctl start mysql.service
sudo systemctl stop mysql.service
```

## tail
List the last few lines of a file particularily useful for log files
 
```
tail -f
```

## less
displays paginated file output, can be navigated. Useful for large files
