export async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) throw new Error('Invalid input!');
  return json;
}
