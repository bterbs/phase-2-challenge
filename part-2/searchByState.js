const fs = require('fs');

const clientsFile = './clients.json';
const readFromFile = () => JSON.parse(fs.readFileSync(clientsFile), 'utf 8');

const stateName = process.argv.slice(2).join();

const searchByState = () => {
  const clients = readFromFile(clientsFile);
  let regexp = new RegExp('^' + stateName + '$', "gi");
  const results = clients.filter((client) => {
    return regexp.test(client.state)
  });
  console.log(`Finding clients in State "${stateName}"...`)

  Object.keys(results).forEach((property) => {
    console.log(`
      id: ${results[property].id},
      rep_name: ${results[property].rep_name},
      company: ${results[property].company},
      city: ${results[property].city},
      state: ${results[property].state}`);
  });
};

searchByState(stateName);
