// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.style.display='flex';
        li.style.alignItems='center';
        li.style.justifyContent='space-between';
        li.style.fontSize='1.8rem';
        li.textContent = task;

        // Button to delete the task
        const deleteBtn = document.createElement('button');
        deleteBtn.style.borderRadius='6px';
        deleteBtn.style.border='none';
        deleteBtn.style.padding='.5rem .7rem ';
        deleteBtn.style.backgroundColor='rgb(160, 59, 59)';
        deleteBtn.style.color='#fff';
        deleteBtn.style.cursor='pointer';
        
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            deleteTask(index);
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial rendering of tasks
renderTasks();
