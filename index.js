let incrementel = document.getElementById('count-el')
let count = 0;


function incremento(){
    count += 1;
    incrementel.textContent = count;
}

let savel = document.getElementById('save-el')

function save(){
    let mensaje ='Visitantes anteriores: ' + count + ' '
    savel.textContent +=  count + ' - ';
    count = 0;
    incrementel.textContent = 0;
    console.log('guardado')
}