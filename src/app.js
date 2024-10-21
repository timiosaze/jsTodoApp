$('#button1').hide(); //hide all the reason text
$('.task').on('click', function() {
  $(this).children('#button1').toggle();
});
let tasks = [];
let theTasks = document.getElementById('theTasks');

//Fetch all tasks from the local Storage
let storedTasks = JSON.parse(localStorage.getItem('tasks'));
let all = ''; 
for(let i =0; i<storedTasks.length; i++){
    let eachTask =  '<li id="' + storedTasks[i] + '" class="task flex rounded-sm text-sm p-4 border border-solid border-black"><div class=""><button id="' + storedTasks[i] + '" onclick="deleteTask('+"'"+storedTasks[i]+"'"+')" class="mr-2 text-white bg-red-700 text-xs py-1 px-1 rounded-md">Delete</button></div>'+ storedTasks[i] +'</li>';
    all += eachTask;
}
theTasks.innerHTML = all;

//Add a Task to the Array and // Populate HTML
function addTask(){
    let task = document.getElementById('task');
    console.log(task.value);
    if(task.value.length > 0 && !tasks.includes(task.value)){
        tasks.push(task.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        let storedTasks = JSON.parse(localStorage.getItem('tasks'));
        let all = ''; 
        for(let i =0; i<storedTasks.length; i++){
            let eachTask =  '<li id="' + storedTasks[i] + '" class="task flex rounded-sm text-sm p-4 border border-solid border-black"><div class=""><button id="' + storedTasks[i] + '" onclick="deleteTask('+"'"+storedTasks[i]+"'"+')" class="mr-2 text-white bg-red-700 text-xs py-1 px-1 rounded-md">Delete</button></div>'+ storedTasks[i] +'</li>';
            all += eachTask;
        }
        theTasks.innerHTML = all;   
    }
    document.getElementById('task').value = '';
}

//Delete a Task 
function deleteTask(task){
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    let index = storedTasks.indexOf(task);
    console.log(index);
    storedTasks.splice(index, 1); 
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    setTimeout(function(){
        window.location.reload();
    });
  
}