let player1 = pname1.value
let player2 = pname2.value
let scoreCount =0
let scoreCountB =0

const join=()=>{
    player1 = pname1.value
    player2 = pname2.value
    if (pname1.value=='' || pname2.value=='') {
        alert('Player name can not be empty! Enter player name to join game')
    }
    else{
        playerTab.style.visibility = 'visible'
        p1.innerText = player1 
        myScore1.innerText = scoreCount
        p2.innerText = player2
        myScore2.innerText= scoreCountB
        pname1.value=''
        pname2.value=''

    }     
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

const disabledBtn =()=>{
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = true
    btn5.disabled = true
    btn6.disabled = true
    btn7.disabled = true
    btn8.disabled = true
    btn9.disabled = true
}

const activateBtn =()=>{
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = false
    btn5.disabled = false
    btn6.disabled = false
    btn7.disabled = false
    btn8.disabled = false
    btn9.disabled = false
}

const myFunc=(e)=>{
   
    if (playbox=='X' &&  e.target.innerText=='') {
        e.target.innerText = playbox
        playbox = "O"
        
        if (btn1.innerText=='X' && btn2.innerText== 'X' && btn3.innerText=='X' || btn4.innerText=='X'&& btn5.innerText=='X' && btn6.innerText=='X' || btn7.innerText=='X' && btn8.innerText=='X'&& btn9.innerText=='X' || btn1.innerText=='X' && btn4.innerText=='X' && btn7.innerText=='X' || btn2.innerText=='X' && btn5.innerText=='X' && btn8.innerText=='X' || btn3.innerText=='X' && btn6.innerText=='X' && btn9.innerText=='X' ||btn1.innerText=='X' && btn5.innerText=='X' && btn9.innerText=='X' || btn3.innerText=='X' && btn5.innerText=='X' && btn7.innerText=='X' ) {
            
            winAlert.style.display = "block"
            winAlert.innerText =`${player1} WON!`
            if (winAlert.innerText ===`${player1} WON!`) {
                scoreCount+=1
                myScore1.innerText = scoreCount
                disabledBtn()
            }  

        }
        else if (btn1.innerText!='' && btn2.innerText!= '' && btn3.innerText!='' && btn4.innerText!=''&& btn5.innerText!='' && btn6.innerText!='' && btn7.innerText!='' && btn8.innerText!=''&& btn9.innerText!='' ){
            winAlert.style.display = "block"   
            winAlert.innerText=` DRAW GAME! ` 
            disabledBtn()
        }
    }
    else if(playbox=='O' &&  e.target.innerText==''){
        e.target.innerText = playbox
        playbox = "X"
   
        if (btn1.innerText=='O' && btn2.innerText== 'O' && btn3.innerText=='O' || btn4.innerText=='O'&& btn5.innerText=='O' && btn6.innerText=='O' || btn7.innerText=='O' && btn8.innerText=='O'&& btn9.innerText=='O' || btn1.innerText=='O' && btn4.innerText=='O' && btn7.innerText=='O' || btn2.innerText=='O' && btn5.innerText=='O' && btn8.innerText=='O' || btn3.innerText=='O' && btn6.innerText=='O' && btn9.innerText=='O' ||btn1.innerText=='O' && btn5.innerText=='O' && btn9.innerText=='O' || btn3.innerText=='O' && btn5.innerText=='O' && btn7.innerText=='O' ) {
            
            winAlert.style.display = "block"
            winAlert.innerText=`${player2} WON!`
            if(winAlert.innerText ===`${player2} WON!`){
                scoreCountB+=1
                myScore2.innerText = scoreCountB
                disabledBtn()
            }
        }
    }
}
const contGame=()=>{
    activateBtn()
    winAlert.style.display = "none"
    // winAlert.innerText=` SCORE BOARD `
    btn1.innerText='' 
    btn2.innerText=''
    btn3.innerText=''
    btn4.innerText=''
    btn5.innerText=''
    btn6.innerText='' 
    btn7.innerText='' 
    btn8.innerText=''
    btn9.innerText=''  
    // myFunc()
    // if (winAlert.innerText===`${player1} WON!` || winAlert.innerText===`${player2} WON!` || winAlert.innerText===` DRAW GAME! `) {
    //     scoreCount++    
    // }
    if (winAlert.innerText===`${player1} WON!`) {
        scoreCount+1
    }
    else if(winAlert.innerText===`${player2} WON!`) {
        scoreCountB+1
    }
    else if (winAlert.innerText===` DRAW GAME! `){
    //   "do nothing"
    }

}

const restartGame=()=>{
    location.reload()
}

