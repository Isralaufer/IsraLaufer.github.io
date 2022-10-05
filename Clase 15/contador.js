function incrementar() {
    const contadorLabel = document.getElementById('contador');
    let contadorValor = parseInt(contadorLabel.innerHTML);
    let contadorVAlor = contadorLabel.ariaValueMax;
    
    // contadorVAlor = contadorValor + 1;
    //contadorValor++;
    //++contadorValor;//
}
//let edad = 10;
//let edad2 = edad++;

//console.log(edad)
//console.log(edad2);

//console.log(edad)
//console.log(edad2); 
let resto = valor %2;{
    if(resto ===0){
        const labelParidad = document.getElementById('paridad')
        labelParidad.innerHTML = 'PAR';

    } else {
        const labelParidad = document.getElementById('paridad')
        labelParidad.innerHTML = 'IMPAR';
    }
}
function decrementar() {
    const label=document.getElementById('contador')
    let valor = label.innerHTML;
    valor= parseINt(valor) - 1;
    
    label.innerHTML = valor;
}
