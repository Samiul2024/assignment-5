// alert()
document.getElementById('completed-btn-1').addEventListener('click', function () {
    alert('Board Updated Successful');

    // assigned task functions
    const taskAssigned = document.getElementById('task-assigned').innerText;
    // console.log(taskAssigned)
    const updatedTaskAssigned = taskAssigned - 1;
    const remainingTask = document.getElementById('task-assigned').innerText = updatedTaskAssigned;
    // console.log(updatedTaskAssigned)

    //task completed functions
    const taskCompleted = document.getElementById('task-completed').innerText;
    // console.log(taskCompleted)
    const convertedTaskCompleted = parseInt(taskCompleted);
    // console.log(typeof convertedTaskCompleted)
    const updatedTaskCompleted = convertedTaskCompleted + 1;
    const totalTaskCompleted = document.getElementById('task-completed').innerText = updatedTaskCompleted;
    // console.log(totalTaskCompleted)

})