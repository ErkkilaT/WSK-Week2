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
const list = document.querySelector('#target');
todoList.forEach(a => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `todo-${a.id}`;
  checkBox.checked = a.completed;
  const label = document.createElement('label');
  label.htmlFor = `todo-${a.id}`;

  const labelText = document.createTextNode(a.task);
  label.append(labelText);
  li.append(checkBox, label);
  list.append(li);
});
