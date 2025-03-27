async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

const user = {
  name: 'John Doe',
  job: 'Developer',
};
const url = 'https://reqres.in/api/users';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
};
const userData = fetchData(url, options);
console.log(userData);
