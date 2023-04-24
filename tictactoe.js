var counter = 0
var turn = 'X'
var grid = document.querySelector('.grid');
var L1 = document.querySelector('#L1');
// var squares = document.querySelectorAll('')
L1.addEventListener('click', function (){
    L1.className = turn 
    if(L1)
if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
L1.removeEventListener('click', arguments.callee);
});
var M2 = document.querySelector('#M2');
M2.addEventListener('click', function (){
    M2.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
M2.removeEventListener('click', arguments.callee);
});
var R3 = document.querySelector('#R3');
R3.addEventListener('click', function (){
    R3.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
R3.removeEventListener('click', arguments.callee);
});
//// middle
var L4 = document.querySelector('#L4');
L4.addEventListener('click', function (){
    L4.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
L4.removeEventListener('click', arguments.callee);
});
var M5 = document.querySelector('#M5');
M5.addEventListener('click', function (){
    M5.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
M5.removeEventListener('click', arguments.callee);
});
var R6 = document.querySelector('#R6');
R6.addEventListener('click', function (){
    R6.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}R6.removeEventListener('click', arguments.callee);
});
/// bottom
var L7 = document.querySelector('#L7');
L7.addEventListener('click', function (){
    L7.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
L7.removeEventListener('click', arguments.callee);
});
var M8 = document.querySelector('#M8');
M8.addEventListener('click', function (){
    M8.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
M8.removeEventListener('click', arguments.callee);
});
var R9 = document.querySelector('#R9');
R9.addEventListener('click', function (){
    R9.className = turn
    if(turn  === 'X'){
    turn = 'O'
} else { 
    turn = 'X'
}
R9.removeEventListener('click', arguments.callee);
}); 
grid.addEventListener('click', function (event){
    if(L1.className === 'X'
    && M2.className === 'X'
    && R3.className === 'X'){
        L1.className = 'Win'
        M2.className = 'Win'
        R3.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(L4.className === 'X'
    && M5.className === 'X'
    && R6.className === 'X'){
        L4.className = 'Win'
        M5.className = 'Win'
        R6.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(L7.className === 'X'
    && M8.className === 'X'
    && R9.className === 'X'){
        L7.className = 'Win'
        M8.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(L1.className === 'X'
    && M5.className === 'X'
    && R9.className === 'X'){
        L1.className = 'Win'
        M5.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(R3.className === 'X'
    && M5.className === 'X'
    && L7.className === 'X'){
        R3.className = 'Win'
        M5.className = 'Win'
        L7.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(L1.className === 'X'
    && L4.className === 'X' 
    && L7.className === 'X' ){
        L1.className = 'Win'
        L4.className = 'Win'
        L7.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(M2.className === 'X'
    && M5.className === 'X'
    && M8.className === 'X'){
        M2.className = 'Win'
        M5.className = 'Win'
        M8.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(R3.className === 'X'
    && R6.className === 'X'
    && R9.className === 'X'){
        R3.className = 'Win'
        R6.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'X' + " wins"
    } else if(L1.className === 'O'
    && M2.className === 'O'
    && R3.className === 'O'){
        L1.className = 'Win'
        M2.className = 'Win'
        R3.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if(L4.className === 'O'
    && M5.className === 'O'
    && R6.className === 'O'){
        L4.className = 'Win'
        M5.className = 'Win'
        R6.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if(L7.className === 'O'
    && M8.className === 'O'
    && R9.className === 'O'){
        L7.className = 'Win'
        M8.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if(L1.className === 'O'
    && M5.className === 'O'
    && R9.className === 'O'){
        L1.className = 'Win'
        M5.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"

    }else if(R3.className === 'O'
    && M5.className === 'O'
    && L7.className === 'O'){
        R3.className = 'Win'
        M5.className = 'Win'
        L7.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if (L1.className === 'O'
    && L4.className === 'O' 
    && L7.className === 'O' ){
        L1.className = 'Win'
        L4.className = 'Win'
        L7.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if(M2.className === 'O'
    && M5.className === 'O'
    && M8.className === 'O'){
        M2.className = 'Win'
        M5.className = 'Win'
        M8.className = 'Win'
        document.querySelector('.grid').remove()
        document.querySelector('main').textContent = 'O' + " wins"
    } else if(R3.className === 'O'
    && R6.className === 'O'
    && R9.className === 'O'){
        R3.className = 'Win'
        R6.className = 'Win'
        R9.className = 'Win'
        document.querySelector('.grid').remove()  
        document.querySelector('main').textContent = 'O' + " wins"
    }  else if (counter < 8){
        console.log('counter')
        counter = counter+1
        counter === 'Win'
     } else {
        console.log('draw')
        counter = 8
        counter != 'Win'
        document.querySelector('main').textContent = 'draw' + " try again"
     }
})