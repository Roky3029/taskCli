# Task tracker CLI

This is a project from the [roadmap.sh](https://roadmap.sh/projects/task-tracker) web page. It is made using their instructions and requirements.

I've implemented the solution using NodeJS and its capability to handle arguments.

### Set up

To set up the project first clone the repository using

`git clone https://github.com/Roky3029/taskCli`

and then get inside the folder using `cd taskCli`

and as you can see inside the `package.json`, once you are inside the folder, just execute the command
`npm i -g .`
(On Linux based distros you may have to execute it with sudo in order to install it globally)

- This will install globally on your computer the CLI and to execute it once it has finished, just use the command `task` followed by the arguments required.

### Usage

Full command: `task <action> <id | text | status>`

- Action list: <br>

| Action             | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `add`              | Adds a new task to the list                                                   |
| `update`           | Updates the text of the specified task                                        |
| `delete`           | Deletes the task                                                              |
| `mark-in-progress` | Sets the task status to "In progress"                                         |
| `mark-done`        | Sets the task status to "Done"                                                |
| `list`             | Gives a list with all the tasks (or the tasks with a certain status if given) |

- If the action is `add` the next parameter must be the text that will be added to the task. <br>Example: `task add "Fix the bug and commit"`

- If the action is `update`, `delete`, `mark-in-progress` or `mark-done` the following parameter must be the task ID <br>
  (In the update command this must be then followed by the updated task name)<br>
  Examples: `task update 1 "Set up the DB"`<br>
                   `task mark-done 3`

- Finally, if the action is `list`, this can be used as `task list` which will display all tasks created, but it can also be given one of the three task status to filter and display just the tasks with that status (`done`, `todo` or `in-progress`). <br>
  Example: `task list todo`

### About the programmer

Hi, I'm Miguel and I love coding things and learning new skills. If you want to reach me, you can check out my social networks:

- [X @AlarikDev](https://x.com/AlarikDev)
- [Github](https://github.com/Roky3029)
