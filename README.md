## Desrcribe ToDoList.addTask

Test: "It should create an empty list item with no arguments"
Code: 
  const list = new ToDoList();
  list.addTask();
  list;
Expected Output: {tasks: {}}

Test: "It should create a list item with the specified properties"
Code: 
  const list = new ToDoList();
  list.addTask("Feed Dogs", "Feeding them dogs, yo");
  list.tasks["Feed Dogs"];
Expected Output: {"name": "Feed Dogs", "description": "Feeding them dogs, yo"}

# Describe ToDoList.markTaskFinished

Test: "It will change a task instance's 'finished' property to 'true'"
Code: 
  const list = new ToDoList();
  list.addTask("Feed Dogs", "Feeding them dogs, yo");
  list.markTaskFinished("Feed Dogs");
  list.tasks["Feed Dogs"].finished;
Expected Output: true

# Describe ToDoList.removeTask

Test: "It will delete a task from the list"
Code: 
  const list = new ToDoList();
  list.addTask("Feed Dogs", "Feeding them dogs, yo");
  list.removeTask("Feed Dogs");
  list.tasks;
Expected Output: {}

Test:
Code:
Expected Output: 

Test:
Code:
Expected Output: 

Test:
Code:
Expected Output: 

Test:
Code:
Expected Output: 

Test:
Code:
Expected Output: 

Test:
Code:
Expected Output: 

