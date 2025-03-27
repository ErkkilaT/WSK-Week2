'use strict';

async function fetchData(url, options) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const data = fetchData('https://reqres.in/api/users/1');
console.log(data);
