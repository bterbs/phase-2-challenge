The quiz is worth 50 points in total.
Reminder: you can use the internet to help you answer these questions :)
__________________________________________

When you run a command in the terminal, where does BASH look for that command?
In the PATH environment variable - it specifies the directories in which executable programs are located.

On a UNIX computer, how do you stop a running process?
Cntrl + C or use the kill command with process id (ex 'kill 1849').

What packages do you have installed via homebrew?
Running 'brew list' in the terminal reveals what packages are currently installed via homebrew. Mine are 'coreutils, hub, node,	postgresql,
git, icu4c, openssl, and readline.'

On a UNIX computer, how do you find the process id of a running process?
in the terminal, type 'ps', it will show current processes with their process ids.

In a terminal, what does control-c do?
It is used to kill a process with signal SIGINT, a 'polite kill.'

In a terminal, what does control-a do?
It moves the cursor to the beginning of the line.

In a terminal, what does control-e do?
It moves the cursor to the end of the line.

What keyboard shortcut do you use to split the screen in your editor?
I use cmd+shift+p to open the command palette then type 'split.'

What keyboard shortcut do you use to split the screen in your terminal?
cmd+d

When a terminal command completes, how can you tell if it was successful or not?
There's no built in way to tell, but you can add '&& say "text to say"' to any command in the terminal and it will provide an audible notification that a specific task is completed in terminal.  

What does your ~/.gitconfig have in it? (paste the whole file here)
I commented out the contents:
<!-- # This is Git's per-user configuration file.
[user]
# Please adapt and uncomment the following lines:
#    name = learner
#    email = brittanyterbush@gmail.com
[user]
    name = bterbs
    email = brittanyterbush@gmail.com -->

What is the difference between a relative and absolute path?
Relative paths are relative to the current working directory, absolute paths refer to the root directory.

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
cd ../pinterest-for-dogs

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open? cmd+t

What files or folders do you want all git repositories to ignore?
Files not required by your project to functions, also operating system files, application files, etc.

What is the main difference between == and === in JavaScript?
Both check the equality of two values, but === also checks the type of each value and compares if those are equal as well. 

__________________________________________
Requirements
 50: All questions are answered correctly.
