let tasks = [];

let taskout = "";
let task = document.getElementById("taskin");
day = 0;

let taskdata = [[]]; 
let dataday = [[day]];


function add_task(){
    dataday.push([])
    
    
    dataday[dataday.length-1].push(task.value)
    dataday[dataday.length-1].push('incomplete')
    
    tasks.push(task.value);
    taskdata[taskdata.length-1] = dataday;
    render_data();
    //task.value = "";
    printt();
}

function update_block(item){    
    index = item.id.split(':');
    index[0] = Number(index[0])
    index[1] = Number(index[1])
    if(taskdata[index[0]][index[1]][1] == 'incomplete'){
        taskdata[index[0]][index[1]][1] = 'partial'
        item.style.backgroundColor = "rgb(255,255,0)";
        item.style.borderColor = "rgb(200,200,0)"
    }
    else if(taskdata[index[0]][index[1]][1] == 'partial'){
        taskdata[index[0]][index[1]][1] = 'complete'
        item.style.backgroundColor = "rgb(0,255,0)";
        item.style.borderColor = "rgb(0,200,0)"
    }
    else if(taskdata[index[0]][index[1]][1] == 'complete'){
        taskdata[index[0]][index[1]][1] = 'incomplete'
        item.style.backgroundColor = "rgb(255,0,0)";
        item.style.borderColor = "rgb(200,0,0)"
    }
}

function printt(){
    taskout = "";
    for(i = 0; i < tasks.length; i++){
        taskout = taskout + tasks[i] + " "; 
    }
    document.getElementById("head").innerHTML = taskout;

}





function new_day(){
    day = day + 1;
    
    //dataday = [];
    taskdata.push(dataday)
    
    dataday = [];
     dataday.push([[day]])
    for(i = 0; i < tasks.length; i++){
        
       dataday.push([]);
        dataday[i+1].push(tasks[i])
        dataday[i+1].push('incomplete')
        
    }
    
    taskdata[taskdata.length-1] = dataday;
    render_data();
}

function render_data(){
    
    document.getElementById('rows').innerHTML = '';
    for(i = taskdata.length - 1; i >=0 ; i--){
        
        
        taskday = document.createElement('div');
        taskday.setAttribute("class","taskday");
        document.getElementById("rows").appendChild(taskday);
        
        for(k = 1; k < taskdata[i].length; k++){
            
        const taskBlock = document.createElement('span');
        if(taskdata[i][k][1]== 'incomplete'){
        taskBlock.style.backgroundColor = "rgb(255,0,0)";
        taskBlock.style.borderColor = "rgb(200,0,0)"
        }
        else if(taskdata[i][k][1]== 'partial'){
            taskBlock.style.backgroundColor = "rgb(255,255,0)";
            taskBlock.style.borderColor = "rgb(200,200,0)"
        }
        else if(taskdata[i][k][1]== 'complete'){
            taskBlock.style.backgroundColor = "rgb(0,255,0)";
            taskBlock.style.borderColor = "rgb(0,200,0)"
        }
        taskBlock.setAttribute("class","taskBlock");
        taskBlock.setAttribute("id",taskdata[i][0].toString()+':'+k.toString());
        
        if((day - taskdata[i][0]) < 3){
        taskBlock.onclick = function(){update_block(taskBlock)}}
        taskday.appendChild(taskBlock);}
    }

}