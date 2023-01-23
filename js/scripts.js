// buisness logic

function ToDoList() {
  this.tasks = {};
  this.currentID = 0;
}

ToDoList.prototype.addTask = function(taskName, taskDescription) {
  let newTask = new Task(taskName, taskDescription);
  this.tasks[this.currentID] = newTask;
  newTask.id = this.currentID;
  this.currentID++;
  return newTask.id;
}

ToDoList.prototype.markTaskFinished = function(taskID) {
  this.tasks[taskID].finished = true;
}

ToDoList.prototype.removeTask = function(taskID) {
  delete this.tasks[taskID];
}

function Task(taskName, taskDescription) {
  this.taskName = taskName;
  this.description = taskDescription;
  this.finished = false;
}

function handleSubmitClick(e) {
  e.preventDefault();
  let userTaskName = document.getElementById('task-name-input').value;
  let userDescription = document.getElementById('task-description-input').value
  let newTaskID = list.addTask(userTaskName, userDescription);
  
  let displayArea = document.getElementById('list-area');
  let newTaskElement = document.createElement('li');
  newTaskElement.classList.add('list-item');
  let elementID = 'task-' + newTaskID;
  newTaskElement.id = elementID;
  newTaskElement.innerHTML += '<p>' + userTaskName + '</p>';
  newTaskElement.innerHTML += '<p>' + userDescription + '</p>';
  newTaskElement.innerHTML += '<p>ID #' + newTaskID + '</p>';
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'Delete';
  newTaskElement.append(deleteButton);
  deleteButton.addEventListener('click', handleDeleteClick);
  displayArea.append(newTaskElement);
}

function handleDeleteClick(e) {
  let taskElement = e.target.parentElement;
  let listItemID = parseInt(taskElement.id.split('-')[1]);
  console.log('parent id', listItemID);
  taskElement.parentElement.removeChild(taskElement);
  list.removeTask(listItemID);
}

console.log('blargh')
const list = new ToDoList();

// UI logic

window.onload=function() {
  document.getElementById('input-area').addEventListener('submit', 
  handleSubmitClick);
  

}