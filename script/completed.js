// alert()

// for card 1
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

    // button disable when clicked
    document.getElementById('completed-btn-1').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard1 = document.getElementById('title-card-1').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard1} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }
    // const updatedHistory = document.createElement('p').innerText='updated History';

    // const showHistory=updatedHistory.innerText='some nothing';

    // console.log(showHistory)

    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
})


// for card 2

// alert()
document.getElementById('completed-btn-2').addEventListener('click', function () {
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

    // button disable when clicked
    document.getElementById('completed-btn-2').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard2 = document.getElementById('title-card-2').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard2} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }    // const updatedHistory = document.createElement('p').innerText='updated History';
    // const showHistory=updatedHistory.innerText='some nothing';
    // console.log(showHistory)
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
})

// for card 3
document.getElementById('completed-btn-3').addEventListener('click', function () {
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

    // button disable when clicked
    document.getElementById('completed-btn-3').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard3 = document.getElementById('title-card-3').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard3} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }    // const updatedHistory = document.createElement('p').innerText='updated History';
    // const showHistory=updatedHistory.innerText='some nothing';
    // console.log(showHistory)
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
})

// for card 4

document.getElementById('completed-btn-4').addEventListener('click', function () {
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

    // button disable when clicked
    document.getElementById('completed-btn-4').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard4 = document.getElementById('title-card-4').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard4} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }    // const updatedHistory = document.createElement('p').innerText='updated History';
    // const showHistory=updatedHistory.innerText='some nothing';
    // console.log(showHistory)
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
})

// for card 5
document.getElementById('completed-btn-5').addEventListener('click', function () {
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

    // button disable when clicked
    document.getElementById('completed-btn-5').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard5 = document.getElementById('title-card-5').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard5} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }    // const updatedHistory = document.createElement('p').innerText='updated History';
    // const showHistory=updatedHistory.innerText='some nothing';
    // console.log(showHistory)
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
})

// for card 6
document.getElementById('completed-btn-6').addEventListener('click', function () {
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

    // button disable when clicked
    document.getElementById('completed-btn-6').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard6 = document.getElementById('title-card-6').innerText;
    // console.log(titleCard1)

    //time 
    const time = document.getElementById('time').innerText = new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard6} at ${time}
    `
    activityLog.appendChild(p);

    // final alert 
    if (updatedTaskAssigned === 0) {
        alert('Congrates!!! You have completed all the current task')
    }
    // return activityLog;
    // const updatedHistory = document.createElement('p').innerText='updated History';
    // const showHistory=updatedHistory.innerText='some nothing';
    // console.log(showHistory)
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
    // return remainingTask;
})
// console.log('remainingTask')

// // final alert
// if (updatedTaskAssigned === 0) {
//     alert('Congrates!!! You have completed all the current task')
// }