let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayItems();
storage();
function storage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
function addTodo() {
  let inputElement = document.querySelector('#todo_input');
  let dateElement = document.querySelector('#todo_date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  if (todoItem !== '' && todoDate !== '') {
    todoList.push({ item: todoItem, date: todoDate });
  }
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
  storage();
  console.log(todoList);
}
function displayItems() {
  let displayElement = document.querySelector('#list_container');
  displayElement.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, date } = todoList[i];
    if (item && date) {
      displayElement.innerHTML += `
        <div class="todo_container">
          <span class="todo_item">${item}</span>
          <span class="todo_date"><b>Date:</b> ${date}</span>
          <div class="button_container">
            <button class="delete_button" onclick="deleteFun(${i})">Delete</button>
            <button class="edit_button" onclick="editFun(${i})">Edit</button> 
            <button class="complete_button" onclick="completeFun(${i})">Complete</button> 
          </div> 
        `;
    }
  }
  storage();
}
function deleteFun(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  displayItems();
  storage();
}
function editFun(index) {
  let newItem = prompt('Enter the new todo item:', todoList[index].item);
  let newDate = prompt('Enter the new date (YYYY-MM-DD):', todoList[index].date);
  if (newItem && newDate) {
    todoList[index] = { item: newItem, date: newDate };
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
    storage();
  }
}
function completeFun(index) {
    let todoItem = document.querySelectorAll('.todo_item');
    let todoDate = document.querySelectorAll('.todo_date');

    todoItem[index].style.textDecoration = 'line-through';
    todoDate[index].style.textDecoration = 'line-through';
}