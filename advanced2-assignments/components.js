const restaurantRow = (restaurant) => {
  const {name, address, city, company} = restaurant;
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.innerText = name;
  const addressTd = document.createElement('td');
  addressTd.innerText = address;
  const cityTd = document.createElement('td');
  cityTd.innerText = city;
  const companyTd = document.createElement('td');
  companyTd.innerText = company;
  tr.append(nameTd, addressTd, cityTd, companyTd);
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, city, company, postalCode, phone} = restaurant;
  //restaurant info
  const nameH3 = document.createElement('h3');
  nameH3.innerText = name;
  const addressP = document.createElement('p');
  addressP.innerText = address;
  const postalCodeP = document.createElement('p');
  postalCodeP.innerText = postalCode;
  const cityP = document.createElement('p');
  cityP.innerText = city;
  const phoneNumberP = document.createElement('p');
  phoneNumberP.innerText = phone;
  const companyP = document.createElement('p');
  companyP.innerText = company;
  const div1 = document.createElement('div');
  div1.append(nameH3, addressP, postalCodeP, cityP, phoneNumberP, companyP);

  //menu info
  const div2 = document.createElement('div');
  const dialogTable = document.createElement('table');
  if (menu == -2) {
    const errorP = document.createElement('p');
    errorP.innerText = 'Error! Could not retrieve menu!';
    div2.append(errorP);
  } else if (menu.courses.length == 0) {
    const errorP = document.createElement('p');
    errorP.innerText = 'Error! No available menu for this restaurant';
    div2.append(errorP);
  } else {
    menu.courses.forEach((course) => {
      const dialogTr = document.createElement('tr');
      const courseName = document.createElement('td');
      const coursePrice = document.createElement('td');
      const courseAllergies = document.createElement('td');
      courseName.innerText = course.name;
      coursePrice.innerText = course.price;
      courseAllergies.innerText = course.diets;

      dialogTr.append(courseName, coursePrice, courseAllergies);
      dialogTable.append(dialogTr);
    });
    div2.append(dialogTable);
  }

  const divFull = document.createElement('div');
  divFull.append(div1, document.createElement('hr'), div2);
  return divFull;
};

export {restaurantRow, restaurantModal};
