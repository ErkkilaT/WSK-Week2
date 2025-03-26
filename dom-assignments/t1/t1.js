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

const insert = document.querySelector('#target');
for (let task of todoList) {
  if (task.completed == true) {
    insert.insertAdjacentHTML(
      'beforeend',
      `<li>
        <input type="checkbox" id="todo-${task.id}" checked>
        <label for="todo-${task.id}">${task.task}</label>
      </li>`
    );
  } else {
    insert.insertAdjacentHTML(
      'beforeend',
      `<li>
        <input type="checkbox" id="todo-${task.id}">
        <label for="todo-${task.id}">${task.task}</label>
      </li>`
    );
  }
}
//insert.insertAdjacentHTML('beforeend', '<li>viljao</li>');
// add your code here
