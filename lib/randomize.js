/* Random Primitive and Complex Types Functions */

const   sql = require('sql-query'),
        sqlQuery = sql.Query(),
        sqlInsert = sqlQuery.insert();

const   axios = require('axios');
const   names = require('./random_names').names;

function randomInteger(digits = 2) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

function randomType(typeDefinition) {
    return typeDefinition[randomInteger(typeDefinition.length) % typeDefinition.length]
}

function randomInsert(tableName, schemaRandomFunction, times = 1000) {
  let values = [];
  for (let index = 0; index < times; index++) {
    values.push(sqlInsert.into(tableName).set(schemaRandomFunction()).build());
  }
  return values;
}

function randomBoolean() {
  return (Math.random() >= 0.5) ? 1 : 0;
}

function randomName() {
  // axios.get('https://randomuser.me/api/?results=0&inc=name&noinfo').then(data =>
  //   `${data.results.name.first} ${data.results.name.last}`
  // );
  // console.log( names[randomBetweeen(1,names.length) % names.length])
  return names[randomBetweeen(1,names.length) % names.length]
}

// {"results":[{"name":{"title":"mr","first":"urbano","last":"carvalho"}}]}

function randomDate() {
  return new Date(
      Math.floor( (1970 + Math.floor( Math.random() * 20 ) ) ),
      Math.floor( (Math.random() * 10) % 12),
      Math.floor( (Math.random() * 10) % 31)
  ).toISOString()
}


//todo
function randomBetweeen(min, max) {
  return Math.floor(Math.random() * Math.pow(10, 1));
}

module.exports = { randomInteger, randomType, randomInsert, randomBetweeen, randomName, randomDate, randomBoolean };