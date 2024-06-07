let boxes = document.querySelectorAll('.box');
let resetGame = document.querySelector('#reset-btn');
let newGame = document.querySelector('#new-btn');
let msgBtn = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');

let turnO = true; //PlayerOTurn
let count = 0;

let winPatterns = [
    [0,1,2], //row pattern
    [3,4,5], //row pattern
    [6,7,8], //row pattern

    [0,3,6], //column pattern
    [1,4,7], //column pattern
    [2,5,8], //column pattern

    [0,4,8], //cross pattern
    [2,4,6], //cross pattern
];
boxes.forEach( (box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML = 'O' //Playetr O turn
            turnO = false;
            box.style.color = 'orangered'
        }else{
            box.innerHTML = 'X' //Player X turn
            turnO = true;
            box.style.color = 'white'
        }
        
        box.disabled = true;
        count++;
        console.log(count)

        //function for Cheak winner
        let isWinner = cheakwinner();
        if(count === 9 && !isWinner){
            matchDraw()
        }
    });
});

//reset function
const resetbtn = ()=>{
    turnO = true;
    count = 0;
    enableboxes()
    msgContainer.classList.add('hide');
}

//boxDisabled function
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

//boxEnable function
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//match Draw
let matchDraw = ()=>{
    msgBtn.innerHTML = `Match is draw`;
    msgContainer.classList.remove('hide');
    disableboxes();
}

//showWinner function
const showWinner =(winner)=>{
    msgBtn.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
}

//cheak Winne function
let cheakwinner = ()=>{
    for(let patterns of winPatterns){
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]])
        // console.log(patterns[0],patterns[1],patterns[2]);
        const val1 = boxes[patterns[0]].innerText;
        const val2 = boxes[patterns[1]].innerText;
        const val3 = boxes[patterns[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                showWinner(val1);
                return true;
            }
        }
    }
};

resetGame.addEventListener('click',resetbtn);
newGame.addEventListener('click',resetbtn);


