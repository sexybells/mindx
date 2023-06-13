const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

function showTasks() {
    list.innerHTML = '';
    taskList.forEach((v) => {
        const child = document.createElement('li');
        child.innerText = v;
        list.appendChild(child)
    });
}
showTasks();
function addTask() {
    const task = input.value;
    if (task) {
        taskList.push(task);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        showTasks();
        input.value = '';
    } else {
        if (confirm("Bạn hãy nhập gì đó")) input.focus()
    }
}
