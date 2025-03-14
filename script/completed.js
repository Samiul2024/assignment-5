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

    // button disable when clicked
    document.getElementById('completed-btn-1').disabled = true;
    // const updatedHistory = document.createElement('p');

    // history
    const activityLog = document.getElementById('history');
    // console.log(activityLog)
    const titleCard1 = document.getElementById('title-card-1').innerText;
    // console.log(titleCard1)

    //time 
    const time =document.getElementById('time').innerText=new Date().toLocaleTimeString();

    const p = document.createElement('p');
    p.innerText = `
    You have completed the task ${titleCard1} at ${time}
    `
    activityLog.appendChild(p);

    // return activityLog;
    
    // const updatedHistory = document.createElement('p').innerText='updated History';
    
    // const showHistory=updatedHistory.innerText='some nothing';
    
    // console.log(showHistory)
    
    // document.getElementById('history').appendChild(updatedHistory);
    // console.log(updatedHistory)
    
})
// if(document.getElementById('clear-history-btn').addEventListener('click',function(){})){

//     // activityLog.removeChild(p);

//     console.log(activityLog)
// }

// document.getElementById('clear-history-btn').addEventListener('click',function(){
//     const activityLog = document.getElementById('history');

//     activityLog.removeChild('p')

// })