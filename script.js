let ComputerScoreText = document.getElementById('computer-score');
let YourScoreText = document.getElementById('your-score');
let RockButton = document.getElementById('rock-button');
let PaperButton = document.getElementById('paper-button');
let ScissorsButton = document.getElementById('scissors-button');
let YourOption = document.getElementById('your-option');
let PcOption = document.getElementById('pc-option');
let WonOrNotText = document.getElementById('won-title');
let AgainstText = document.getElementById('against');
let PlayAgainButton = document.getElementById('play-again');
let HurrayPlayAgainButton = document.getElementById('hurray-play-again');
let MainGame = document.getElementById('main-game');
let AfterPlaying = document.getElementById('played');
let NextButton = document.getElementById('next-button');

let RulesArea = document.getElementsByClassName('rules-area');
let RulesButton = document.getElementsByClassName('rules-button');
let RulesAreaCloseButton = document.getElementsByClassName('rules-area-close-button');

let RockInnerHtml = '<img src="static/rock.png" alt="rock" srcset="">';
let PaperInnerHtml = '<img src="static/paper.png" alt="rock" srcset="">';
let ScissorsInnerHtml = '<img src="static/scissors.png" alt="rock" srcset="">';

let ComputerScore = 0;
let YourScore = 0;

if(!localStorage.getItem('ComputerScore')){
    localStorage.setItem('ComputerScore',ComputerScore);
    localStorage.setItem('YourScore',YourScore);
}
else{
    ComputerScore = parseInt(localStorage.getItem('ComputerScore'));
    YourScore = parseInt(localStorage.getItem('YourScore'));
    ComputerScoreText.innerHTML = ComputerScore;
    YourScoreText.innerHTML = YourScore;
}


const OPTIONS = ['rock','scissors','paper'];

const WINNER_OPTION = {
    [OPTIONS[0]]: OPTIONS[1],
    [OPTIONS[1]]: OPTIONS[2],
    [OPTIONS[2]] : OPTIONS[0]
}

const PC_INNER_HTML = {
    [OPTIONS[0]]: RockInnerHtml,
    [OPTIONS[1]]: ScissorsInnerHtml,
    [OPTIONS[2]] : PaperInnerHtml
}


function DidYouWin(your_option,pc_option){
    if(WINNER_OPTION[your_option]==pc_option){
        YourScore+=1;
        localStorage.setItem('YourScore',YourScore);
        return 'you win';
    }
    else if(WINNER_OPTION[pc_option]==your_option){
        ComputerScore+=1;
        localStorage.setItem('ComputerScore',ComputerScore);
        return 'you lost';
    }
    else{
        return 'tie up';
    }
}

function DoChangesAfterPlaying(pc_option,your_option, innerHTML){
    let did_you_win = DidYouWin(your_option,pc_option);
    YourOption.innerHTML = innerHTML;
    PcOption.innerHTML = PC_INNER_HTML[pc_option];
    WonOrNotText.innerHTML = did_you_win

    YourOption.parentNode.classList.remove('winner','non-winner');
    PcOption.parentNode.classList.remove('winner','non-winner');
    if(did_you_win=='tie up'){
        PlayAgainButton.innerHTML = 'replay';
        AgainstText.innerHTML = '';
        YourOption.parentNode.classList.toggle('non-winner');
        PcOption.parentNode.classList.toggle('non-winner');
    }
    else{
        if(did_you_win=='you win'){
            YourOption.parentNode.classList.toggle('winner');
            PcOption.parentNode.classList.toggle('non-winner');
            NextButton.classList.toggle('hide');
        }
        else{
            YourOption.parentNode.classList.toggle('non-winner');
            PcOption.parentNode.classList.toggle('winner');
        }

        AgainstText.innerHTML = 'against pc';
        PlayAgainButton.innerHTML = 'play again';
    }


    YourOption.classList.add(your_option);
    PcOption.classList.add(pc_option);
    ComputerScoreText.innerHTML = ComputerScore;
    YourScoreText.innerHTML = YourScore;
    MainGame.style.display = 'none';
    AfterPlaying.style.display = 'flex';
}

function HideElements(){
    MainGame.style.display = 'block';
    AfterPlaying.style.display = 'none';
    YourOption.classList.remove(...OPTIONS);
    PcOption.classList.remove(...OPTIONS);
    NextButton.classList.add('hide');
    
}

NextButton.addEventListener('click',()=>{
    HideElements();
    window.location.href = 'hurray.html';
    
})

PlayAgainButton.addEventListener('click',()=>{
    HideElements();
})

PaperButton.addEventListener('click',()=>{
    let pc_option = OPTIONS[(Math.floor(Math.random() * OPTIONS.length))];
    let your_option = OPTIONS[2];
    innerHTML = PaperInnerHtml;
    DoChangesAfterPlaying(pc_option,your_option,innerHTML);
})

RockButton.addEventListener('click',()=>{
    let pc_option = OPTIONS[(Math.floor(Math.random() * OPTIONS.length))];
    let your_option = OPTIONS[0];
    innerHTML = RockInnerHtml;
    DoChangesAfterPlaying(pc_option,your_option,innerHTML);
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

ScissorsButton.addEventListener('click',()=>{
    let pc_option = OPTIONS[(Math.floor(Math.random() * OPTIONS.length))];
    let your_option = OPTIONS[1];
    innerHTML = ScissorsInnerHtml;
    DoChangesAfterPlaying(pc_option,your_option,innerHTML);
})

