
let p1score = parseInt(document.getElementById('score1').innerText);
let p2score = parseInt(document.getElementById('score2').innerText);

function add1p1(){
    p1score+=1;
    document.getElementById('score1').innerText=p1score;

}

function add2p1(){
    p1score+=2;
    document.getElementById('score1').innerText=p1score;

}

function add3p1(){
    p1score+=3;
    document.getElementById('score1').innerText=p1score;
 
}

function add1p2(){
    p2score +=1;
    document.getElementById('score2').innerText=p2score;

}

function add2p2(){
    p2score +=2;
    document.getElementById('score2').innerText=p2score;

    
}

function add3p2(){
    p2score +=3;
    document.getElementById('score2').innerText=p2score;

}

function reset(){
    p1score=0;
    p2score=0;
    document.getElementById('score1').innerText=0;
    document.getElementById('score2').innerText=0;

}