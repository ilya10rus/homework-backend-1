const yargs = require("yargs");
const chalk = require('chalk')
const { getNote, addNote, removeNote } = require("./notes.controller");

yargs.command({
  command: "add",
  describe: "add new note to list",
  builder: {
    title: { type: "string", describe: "Note title", demandOption: true },
  },
  async handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    const notes = await getNote();
    console.log(chalk.bold.green.bgWhite('Here is the list of notes:'));

    notes.forEach(element => {
    console.log(chalk.bold('ID:'),element.id,chalk.bold('Title:'), element.title)
    })
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: { type: "number", describe: "id", demandOption: true },
  },
  async handler(id) {
     removeNote(id)
  },
});

yargs.parse();
