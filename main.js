
function getRandomExcuse(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function test(){
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let excuse =  who[getRandomExcuse(0,4)] + " " + what[getRandomExcuse(0,4)] + " " + when[getRandomExcuse(0,5)];

document.getElementById('excuse').innerHTML = excuse;
}
