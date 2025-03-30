import {fetchData} from './fetchData.js';
import {restaurantRow} from './components.js';
import {restaurantModal} from './components.js';
import {baseUrl} from './baseUrl.js';

('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants');

//get restaurant data

const restaurants = await fetchData(baseUrl);
console.log(restaurants);

const filterBtn = document.querySelector('#filter-btn');
filterBtn.addEventListener('click', () => {
  const company = document.querySelector('#companySelect').value;
  let filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.company == company
  );
  populateTable(filteredRestaurants);
});

//sort data
restaurants.sort((a, b) => {
  a.name.toLowerCase();
  b.name.toLowerCase();
  return a.name < b.name ? -1 : 1;
});
populateTable(restaurants);
//populate it into html and add modal functionality

function populateTable(restaurants) {
  const table = document.querySelector('#restaurant-table');
  table.innerHTML = '';
  const modal = document.querySelector('#modal');
  let lastHighlight;
  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);
    tr.addEventListener('click', async () => {
      lastHighlight?.classList.remove('highlight');
      tr.classList.add('highlight');
      lastHighlight = tr;

      modal.innerHTML = '';
      const menu = await fetchData(
        baseUrl + '/daily/' + restaurant._id + '/fi'
      );
      const modalInner = restaurantModal(restaurant, menu);
      modal.append(modalInner);
      modal.showModal();
    });

    table.append(tr);
  });
}
