const fs = require('fs');

const clientsFile = './clients.json';
const readFromFile = () => JSON.parse(fs.readFileSync(clientsFile), 'utf 8');

const name = process.argv.slice(2).join();

const searchByName = () => {
  const clients = readFromFile(clientsFile);
  const regexp = new RegExp('^' + name, "gi");
  const results = clients.filter((client) => {
    return regexp.test(client.rep_name)
  });
  console.log(`Finding clients with name "${name}"...`)

  Object.keys(results).forEach((prop) => {
    console.log(`id: ${results[prop].id}, rep_name: ${results[prop].rep_name}`);
  });
};

searchByName(name);
