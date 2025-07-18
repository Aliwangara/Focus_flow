
// Goal Card variables

const goalContent = document.getElementById('goal-content');
const goalEl = document.getElementById('input-el');
const goalBtn = document.getElementById('goal-btn')

let goals =JSON.parse(localStorage.getItem("goals"))|| [];

if(!Array.isArray(goals)){
    goals = []
}

goalDisplay()


console.log("goals  :", goals)

// End of goal card variables

// start of stopwatch variables

const startBtn = document.getElementById('start-clock');
const stopBtn = document.getElementById('stop-clock');
const resetBtn = document.getElementById('reset-clock');
const display = document.getElementById('display')

let seconds = 0;
let minutes = 0;
let hours = 0 ;
let timer;
let isRunning = false



// End of stop watch

// todo list variables

const todoEl = document.getElementById('todo-el')
const addtaskBtn = document.getElementById('add-task');
const todoContent =document.getElementById('todo-content');

const task =JSON.parse(localStorage.getItem('task')) || [];

console.log("task :", task)

taskDisplay()



// end of todo list





// Quote Card Variables

const backgroundImage = ['url("images/quotecard.jpg")']

const quote = [`Be who you are and say what you feel,
     because those who mind don't matter, 
     and those who matter don't mind.`]

const author = ["Bernard M. Baruch"]

const quoteMain = document.querySelector('#quote-main')

const quoteText= document.querySelector('#quote-text')

// End of quote card variables




// Focus card function

function goalDisplay(){

    goalContent.innerHTML = ``


    goals.forEach((goal,index) => {
        const li = document.createElement('li');
        
        li.className = "goal-list"
        li.contentEditable = true
        li.textContent = goal


       li.addEventListener('blur', ()=> {
        const newGoal = li.textContent.trim();

        if(newGoal !== ''){
        goals[index] = newGoal;
            localStorage.setItem("goals", JSON.stringify(goals))
        }
        
        })

        li.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            li.blur(); // Remove focus to trigger the blur event
        }
    })

    const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.id = 'goal-delete-btn';

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goals.splice(index, 1);
            localStorage.setItem("goals", JSON.stringify(goals));
            goalDisplay();
        })

        li.appendChild(deleteBtn)
        goalContent.appendChild(li)
       
        
        
    });
    
    

}

function saveGoalEdit(index, newGoal){
    if(newGoal.trim() === ''){
        goals[index]= newGoal;
        localStorage.setItem("goals", JSON.stringify(goals));
    }
}



goalBtn.addEventListener('click', function(){

   goals.push(goalEl.value)

   goalDisplay()

   


    localStorage.setItem("goals",  JSON.stringify(goals))

    

    goalEl.value = '';

    
})


// Start of Stop Watch

function updateTime(){
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++

    }

    const sec = seconds < 10 ? '0' + seconds : seconds
    const min = minutes < 10 ? '0' + minutes : minutes
    const hrs = hours < 10 ? '0' + hours : hours

    display.textContent = `${hrs} : ${min} : ${sec}`

    


}

startBtn.addEventListener('click', ()=>{

    if(!isRunning){
        timer = setInterval(updateTime, 1000)
        isRunning = true
    }


})

stopBtn.addEventListener('click', ()=>{

        clearInterval(timer)
        isRunning = false


})

resetBtn.addEventListener('click', ()=>{

    clearInterval(timer);
    isRunning = false;
    hours =0;
    minutes = 0;
    seconds = 0; 
    display.textContent = `00 : 00 : 00`;


})





//  start of quote card
function quoteCard(){

quoteBackground()
quoteContent()




}

quoteCard()



function quoteBackground(){

        quoteMain.style.backgroundImage = backgroundImage[0]


}

quoteBackground()




function quoteContent(){
    let p = '';

     p = `

        <div style="padding:20px;">
        <p style='margin:10px; font:inherit; font-style:italic;'>
        "${quote}</p> \n <h4 style='font:inherit; font-style:italic;'>
        -${author}"</h4>
        
        </div>
        `
        
        

        quoteText.innerHTML += p

}


// todo list

addtaskBtn.addEventListener('click', addTask);

function addTask(){

            const taskText = todoEl.value.trim()

            if(taskText !== ''){

                task.push(
                {
                    text:taskText, 
                    done:false

                })
                localStorage.setItem('task', JSON.stringify(task))
                taskDisplay()

                


             }

   



}

   

function taskDisplay(){
    todoContent.innerHTML = ``;
   

     task.forEach((tasks,index) => {
        const li = document.createElement('li')
        li.textContent = tasks.text
        li.className = 'todo-list'

        const deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.id = 'delete-btn';

        li.appendChild(deleteBtn)
        todoContent.appendChild(li)

       



        

        



        
        if(tasks.done){
                li.classList.toggle('done')

            }

        li.addEventListener('click', ()=>{

                task[index].done = !task[index].done;
                li.classList.toggle('done')
                localStorage.setItem('task', JSON.stringify(task))

        });


        deleteBtn.addEventListener('click', (e)=>{
            e.stopPropagation();
            task.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(task));
            taskDisplay();
        })

        
        

    });

    todoEl.value = '';




}


    

    

    




















