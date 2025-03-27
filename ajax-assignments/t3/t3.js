async function fetchData() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch('https://reqres.in/api/unknown/23', options);
    if (!response.ok) throw new Error('Invalid input!');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('An eerror occurred:', error);
  }
}

fetchData();
