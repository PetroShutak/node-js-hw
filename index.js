const { Command } = require('commander');
const program = new Command();
const contactsOperations = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = contactsOperations.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactById = contactsOperations.getContactById(id);
      console.log(contactById);
      break;

    case 'add':
      const newContact = contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const removeContact = contactsOperations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

console.log(argv);
invokeAction(argv);
