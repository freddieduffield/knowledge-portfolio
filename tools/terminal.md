# Terminal 
## command structure

```
command -options arguments
```

`options` 
- case sensitive, mean different things. Turn things on and off for commands.
- can be chained eg. `ncal -3h`

## man pages
```
man command
```
displayed using `less`

`space` - scroll page

`q` - quit

`b` - for back

`h` - help

`/` - search 

**synopis**
`[]` - optional

## Types of command

```
type command
```

- executable program (stored in /bin derivitive)
- built in shell command
- shell function
- alias 

```
which
```
where a command is located



`ps aux`
*create a bash script* 

 ## `cat`
* show contents of a small file 
  ```Bash
  cat myFile.txt
  ```
* add text a file
  ```Bash
  cat >> myFile.txt << EOF
  ...type text...
  EOF

 ## `chmod`
 updating permissions

`chmod u+x` - make executable

## `curl` 

`- H` - add header. e.g `"accept: application/vnd.sd.pdf.v1+octet-stream"`

`-v` - at end, get details

`-o /path/to/file` - output to file

`| jq` - prettify a json response (requires jq to be installed)   

## `dig`

- queries dns nameservers for information about host addresses etc. 
```
dig example-url.com
```

## `grep`

search for a term

* [ngrep](https://netbeez.net/blog/linux-analyze-network-ngrep/#:~:text=Ngrep%2C%20stands%20for%20%E2%80%9Cnetwork%20grep,in%20a%20human%2Dfriendly%20way) - network grep 
## `jobs`
* show what jobs are running.
```
jobs
```

## `less`
displays paginated file output, can be navigated. Useful for large files
```
less <filename> 
less -N <filename> // with line numbers
```

`f` / `space` - go forward

`/` - search

`n` - repeat previous search

`N` - repeat previous search in the reverse direction

## `ls`
lists files and directories with the system
```
ls
```
`-l` - long versions

`-a` hidden files

## `mkdir`
* create a directory 
```
mkdir <name>
```

## `mv`
* rename file 
```
mv filename.txt newfilename.txt
```
* move a file to a new directory
```
mv ./Downloads/lecture-79-challenge.txt ./curriculum/1907-0208-2020
```
## `tail`

`tail -f path/to/logs` - follows the last few lines of a file. Prints new logs into the console as they a emitted. 

`tail -n 100 path/to/log` prints out the last 100 lines of a file

`tail -f path/to/log | grep "search-term"` - read and follow logs relating to specific search term

`tail -f path/to/log &` run follow logs in the background  

## `tcpdump`
data network packet analyser

## `touch` 
* create a file
```
touch <name>
```

## `vim`

`d` - cut

`dd` - cut line

`v` - select, move cursor to end of select

`y` - to copy (yank)

`yy` - to copy line

`p` - paste after

`P` - paste before

`u` - undo

`:set nu` - show line numbers

`:x` - save and quit

`:wq` - write quit

