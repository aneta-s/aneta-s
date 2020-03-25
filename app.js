let count = 0;

do {
  count++; //is going to be 1 even if our loop is false. It is going to run this iteration
if (count >= 20){ //count is still going to be >= to 20 even our While Loop is false
  break;//We don't break up to do While loop but the actual statment it self is false we only run it one time bacause it says DO WHILE loop
}

}
while (false)

console.log(count);






/* ///APPLICATION TO ADD TASKS, PERSIST TO THE LOCAL STORAGE SO WE CAN LEAVE AND COME BACK AND IT IS STILL THERE. DELATE TASKS, CLEAR THEM, FILTER THEM. HOW TO WORK WITH THE DOM, WITH THE WORK WITH LOCAL STORAGE

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//Show added tasks inside the ul here (Tasks>Filter Tasks). We need to create antoher function, in addition to the function we need event to load for the function to be called.

// Load all event listeners

// DOM Load event. Event for the function to be loaded
  document.addEventListener('DOMContentLoaded', getTasks);
  function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
  }

  //Get Tasks from LS
  function getTasks(){
    let tasks; //initialize tasks
    if(localStorage.getItem('tasks') === null){ //check to see if there are any tasks there. Null=means in LS is nothing in there
  tasks = []; //if there isn't tasks set it to and empty Array
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks')); //if there is tasks, set it to whatever is there. Parse it as JSON
    } 

    tasks.forEach(function(task){//loop these tasks that are there
      //Create li element
      const li = document.createElement('li');     //create DOM element, just like we did with Add Task (copy/paste code) but instead taskInput in li.appendChild(document.createTextNode(taskInput.value)); it is task
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
    
      // Append li to ul
      taskList.appendChild(li);
    });
  }

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Add Local Storage LS as another function to Add Task function
  // Store in LS
  storeTaskInLocalStorage(taskInput.value); // add task into here which comes from taskInput.value above. So whatever is typed in ''New Task'' is passed in ()

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}
// Under Add Task function add LS function
function storeTaskInLocalStorage(task){
  let tasks; //initialize tasks
  if(localStorage.getItem('tasks') === null){ //check to see if there are any tasks there. Null=means in LS is nothing in there
tasks = []; //if there isn't tasks set it to and empty Array
  } else {
    tasks = JSON.parse(localStorage('tasks')) //if there is tasks, set it to whatever is there. Parse it as JSON
  } 
  
  tasks.push(task);//pass in task that was passed in as parameter (task), so we're adding it in to the array tasks []

localStorage.setItem('tasks', JSON.stringify(tasks));//set back to local storage, tasks variable has to be storage as a String. Wrap it in a function JSONstringify so we can actually store it
}// untill here we have storage New Tasks in Application in Local Storage
//want to check in LS if there is any task in there

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);// we don't have id to pass in here so we have to pass in the actual element which is la above
    }
  }
}
//Remove from LS
function removeTaskFromLocalStorage(taskItem){
  console.log(taskItem);//it will log the list item in the console

  //Check Local Storage, put it into a variable just like we did by Store Task below
  let tasks; //initialize tasks
  if(localStorage.getItem('tasks') === null){ //check to see if there are any tasks there. Null=means in LS is nothing in there
tasks = []; //if there isn't tasks, set it to and empty Array
  } else {
    tasks = JSON.parse(localStorage('tasks')) //if there is tasks, set it to whatever is there. Parse it as JSON
  } 
  
  task.forEach(function(task, index){
  if(taskItem.textContent === task){//textContent will be the actual text of the Task Item, if it matches the current task in the iteration
  tasks.splice(index, 1);//if it does than we know that one we want it to delete. Get index by putting it as a second parameter of forEach (or forEach call back). Than we want to put in here the index and we want to delete 1 from the index.
  }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));

}
// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

  //Clear tasks from LS, so after page reload it stays gone
clearTasksFromLocalStorage();
}
// Clear Tasks from LS
function clearTasksFromLocalStorage(){
  localStorage.clear();

}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
} */