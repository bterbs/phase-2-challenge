const fs = require('fs');
const clientsFile = './clients.json';
const readFromFile = clientsFile => JSON.parse(fs.readFileSync(clientsFile), 'utf 8');

// searchByName.js takes one string argument (let's call it name), finds all the clients
// from clients.json who have a rep_name that starts with the name string, and prints the
// id and rep_name of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Bob" is the same as a
// search for "bob".
const name = process.argv.slice(2).join();

const searchByName = (name) => {
  const clients = readFromFile(clientsFile);
  let regexp = new RegExp('^' + name, "gi");
  const results = clients.filter((client) => {
    return regexp.test(client.rep_name)
  });
  console.log(results);
};

searchByName(name)
