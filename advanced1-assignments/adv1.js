import {fetchData} from './fetchData.js';
import {restaurantRow} from './components.js';
import {restaurantModal} from './components.js';
import {baseUrl} from './baseUrl.js';
//const baseUrl =
('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants');

//get restaurant data

const restaurants = await fetchData(baseUrl);
console.log(restaurants);

//sort data
restaurants.sort((a, b) => {
  a.name.toLowerCase();
  b.name.toLowerCase();
  return a.name < b.name ? -1 : 1;
});

//populate it into html and add modal functionality
const table = document.querySelector('table');
const modal = document.querySelector('#modal');
let lastHighlight;
for (const restaurant of restaurants) {
  const tr = restaurantRow(restaurant);
  tr.addEventListener('click', async () => {
    lastHighlight?.classList.remove('highlight');
    tr.classList.add('highlight');
    lastHighlight = tr;

    modal.innerHTML = '';
    const menu = await fetchData(baseUrl + '/daily/' + restaurant._id + '/fi');
    const modalInner = restaurantModal(restaurant, menu);
    modal.append(modalInner);
    modal.showModal();
  });

  table.append(tr);
}
