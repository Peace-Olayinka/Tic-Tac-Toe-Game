let pscore1 
let pscore2 
let player1 = pname1.value
let player2 = pname2.value
const join=()=>{
    playerTab.style.visibility = 'visible'
    player1 = pname1.value
    player2 = pname2.value
    pscore1 = 0
    pscore2 = 0
    pname1.value=''
    pname2.value=''
    res.innerHTML =
    `
        <tr>
            <td>${player1}</td>
            <td>${pscore1}</td>
        </tr>
        <tr>
            <td>${player2}</td>
            <td>${pscore2}</td>
        </tr>
     `      
}
 
const startGame =()=>{
    mainbox.style.visibility = 'visible'
}

let btn1 = document.getElementById('mybtn1')
let btn2 = document.getElementById('mybtn2')
let btn3 = document.getElementById('mybtn3')
let btn4 = document.getElementById('mybtn4')
let btn5 = document.getElementById('mybtn5')
let btn6 = document.getElementById('mybtn6')
let btn7 = document.getElementById('mybtn7')
let btn8 = document.getElementById('mybtn8')
let btn9 = document.getElementById('mybtn9')
let playbox = 'X'
let initialscore = 0

const myFunc=(e)=>{
    if (playbox=='X' &&  e.target.innerText=='') {
        e.target.innerText = playbox
        playbox = "O"
        
        if (btn1.innerText=='X' && btn2.innerText== 'X' && btn3.innerText=='X' || btn4.innerText=='X'&& btn5.innerText=='X' && btn6.innerText=='X' || btn7.innerText=='X' && btn8.innerText=='X'&& btn9.innerText=='X' || btn1.innerText=='X' && btn4.innerText=='X' && btn7.innerText=='X' || btn2.innerText=='X' && btn5.innerText=='X' && btn8.innerText=='X' || btn3.innerText=='X' && btn6.innerText=='X' && btn9.innerText=='X' ||btn1.innerText=='X' && btn5.innerText=='X' && btn9.innerText=='X' || btn3.innerText=='X' && btn5.innerText=='X' && btn7.innerText=='X' ) {
            
            winAlert.innerText =`${player1} WON!`
            e.target.disabled = true

            if (winAlert.innerText ===`${player1} WON!`) {  
                pscore1 = initialscore + 1 
            }
  
        }
        else if (btn1.innerText!='' && btn2.innerText!= '' && btn3.innerText!='' && btn4.innerText!=''&& btn5.innerText!='' && btn6.innerText!='' && btn7.innerText!='' && btn8.innerText!=''&& btn9.innerText!='' ){
            winAlert.innerText=` DRAW GAME! ` 
        }
    }
    else if(playbox=='O' &&  e.target.innerText==''){
        e.target.innerText = playbox
        playbox = "X"
   
        if (btn1.innerText=='O' && btn2.innerText== 'O' && btn3.innerText=='O' || btn4.innerText=='O'&& btn5.innerText=='O' && btn6.innerText=='O' || btn7.innerText=='O' && btn8.innerText=='O'&& btn9.innerText=='O' || btn1.innerText=='O' && btn4.innerText=='O' && btn7.innerText=='O' || btn2.innerText=='O' && btn5.innerText=='O' && btn8.innerText=='O' || btn3.innerText=='O' && btn6.innerText=='O' && btn9.innerText=='O' ||btn1.innerText=='O' && btn5.innerText=='O' && btn9.innerText=='O' || btn3.innerText=='O' && btn5.innerText=='O' && btn7.innerText=='O' ) {
            
            winAlert.innerText=`${player2} WON!`
            e.target.disabled = true

            if (winAlert.innerText===`${player2} WON!`) {
                pscore2 = initialscore + 1
            }
        }
    }
}

const contGame=()=>{
    winAlert.innerText=` SCORE BOARD `
    btn1.innerText='' 
    btn2.innerText=''
    btn3.innerText=''
    btn4.innerText=''
    btn5.innerText=''
    btn6.innerText='' 
    btn7.innerText='' 
    btn8.innerText=''
    btn9.innerText=''  
    if (winAlert.innerText===`${player1} WON!` || winAlert.innerText===`${player2} WON!` || winAlert.innerText===` DRAW GAME! `) {
        initialscore++  
    }
}

const restartGame=()=>{
    location.reload()
}

