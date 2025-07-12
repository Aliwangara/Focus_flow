
let goals = [];
const goalContent = document.getElementById('goal-content');
const goalEl = document.getElementById('input-el');
const goalBtn = document.getElementById('goal-btn')

const backgroundImage = ['url(images/quotecard.jpg")']

const quote = [`Be who you are and say what you feel,
     because those who mind don't matter, 
     and those who matter don't mind.`]


const author = ["Bernard M. Baruch"]

const quoteMain = document.querySelector('#quote-main')

const quoteText= document.querySelector('#quote-text')


function quoteCard(){

quoteBackground()
quoteContent()




}

quoteCard()



function quoteBackground(){

        quoteMain.style.backgroundImage = backgroundImage[0]


}

quoteBackground()


// quoteContent.addEventListener('DOMContentLoaded', displayquote)

// function displayquote(){
//     const p = document.createElement('p');
//     const author = document.createElement('h4')

//     p.innerHTML = ` "${quote} /n ${author}" ` 

//     quoteCard.appendChild(p,author)



// }

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

// Focus card function

goalBtn.addEventListener('click', function(){

    goals.push(goalEl.value)

    goalContent.textContent += goalEl.value

    goalEl.value = '';

    


})





