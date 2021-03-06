console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yags', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note saved");
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

  } else {
    console.log("Note title taken");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
