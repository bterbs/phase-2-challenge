const fs = require('fs');
const clientsFile = './clients.json';
const readFromFile = clientsFile => JSON.parse(fs.readFileSync(clientsFile), 'utf 8');

const stateName = process.argv.slice(2).join();

const searchByState = () => {
  const clients = readFromFile(clientsFile);
  let regexp = new RegExp(stateName, "gi");
  const results = clients.filter((client) => {
    return regexp.test(client.state)
  });
  console.log(`Finding clients in State "${stateName}"...`)
  console.log(results);

};
searchByState(stateName);
