let RulesArea = document.getElementsByClassName('rules-area');
let RulesButton = document.getElementsByClassName('rules-button');
let RulesAreaCloseButton = document.getElementsByClassName('rules-area-close-button');


let HurrayPlayAgainButton = document.getElementById('hurray-play-again');




HurrayPlayAgainButton.addEventListener('click',()=>{
    window.location.href = 'index.html';
})

RulesButton.item(0).addEventListener('click',()=>{
    RulesArea.item(0).style.right = '0px';
    RulesArea.item(0).style.display = 'flex';
    setTimeout(()=>{
        RulesArea.item(0).classList.add('animate');
    },1);
})

RulesAreaCloseButton.item(0).addEventListener('click',()=>{
    RulesArea.item(0).style.display = 'none';
    RulesArea.item(0).classList.remove('animate');
})