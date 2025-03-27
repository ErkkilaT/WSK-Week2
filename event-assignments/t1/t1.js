// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector('ul');

//init list
todoList.forEach(a => {
  addItem(a);
});

//button functionality
const addBtn = document.querySelector('#addbtn');
const dialog = document.querySelector('dialog');
const dialogAdd = document.querySelector('#dialogAdd');
const dialogInput = document.querySelector('#dialogInput');

addBtn.addEventListener('click', () => {
  dialog.open = true;
});

let nextId = 6;
dialogAdd.addEventListener('click', evt => {
  evt.preventDefault();
  const newItem = {
    id: nextId,
    task: dialogInput.value,
    completed: false,
  };
  nextId++;
  addItem(newItem);
  todoList.push(newItem);
  console.log('asd');
  dialogInput.value = null;
  dialog.close();
  console.log(todoList);
});

//adds item to htmllist
function addItem(a) {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `todo-${a.id}`;
  checkBox.checked = a.completed;
  const label = document.createElement('label');
  label.htmlFor = `todo-${a.id}`;
  const labelText = document.createTextNode(a.task);
  const deleteBtn = document.createElement('button');
  deleteBtn.append(document.createTextNode('Delete'));

  checkBox.addEventListener('click', b => {
    if (a.completed) {
      a.completed = false;
      checkBox.checked = false;
    } else {
      a.completed = true;
      checkBox.checked = true;
    }
    console.log(todoList);
  });
  deleteBtn.addEventListener('click', () => {
    todoList.splice(todoList.indexOf(a), 1);
    list.removeChild(li);
    console.log(todoList);
  });

  label.append(labelText);
  li.append(checkBox, label, deleteBtn);
  list.append(li);
}
