
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
    fs.readFile(contactsPath, 'utf-8')
    .then(data => console.table(JSON.parse(data)))
    .catch(error => console.log(error.message));
    
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    fs.readFile(contactsPath, 'utf-8')
    .then(data => {
        const contacts = JSON.parse(data);
        const contact = contacts.find(contact => contact.id === contactId);
        console.log(contact);
    }
    )
    .catch(error => console.log(error.message));


}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    fs.readFile(contactsPath, 'utf-8')
    .then(data => {
        const contacts = JSON.parse(data);
        const contact = contacts.filter(contact => contact.id !== contactId);
        console.log(contact);
    }
    )
    .catch(error => console.log(error.message));


}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
    // Перед додаванням перевіряє, чи не дублюється вже існуючий контакт.
    fs.readFile(contactsPath, 'utf-8')
    .then(data => {
        const contacts = JSON.parse(data);
        const contact = {
            id: contacts.length + 1,
            name,
            email,
            phone,
        };
        contacts.push(contact);
        console.log(contacts);
    }
    )
    .catch(error => console.log(error.message));

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};