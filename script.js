const canvas = document.getElementById("canvas");
const decrementoBtn = document.getElementById("decrementar");
const incrementoBtn = document.getElementById("incrementar");
const tamañoBtn = document.getElementById("tamaño");
const limpiarBtn = document.getElementById("limpiar");
const colorBtn=document.getElementById('color');

const contexto= canvas.getContext('2d');

let tamaño=10;
let presionado=false;
colorBtn.value='black';
let color= colorBtn.value;
let x;
let y;

canvas.addEventListener('mousedown', (e)=>{
    presionado=true;
    x=e.offsetX;
    y=e.offsetY;
})

document.addEventListener('mouseup',(e)=>{
    presionado=false;

    x=undefined;
    y= undefined;
})

canvas.addEventListener('mousemove',(e)=>{
    if(presionado){
        const x2 =e.offsetX;
        const y2 =e.offsetY;

        dibujarCirculo(x2,y2);
        dibujarLinea(x,y,x2,y2);

        x=x2;
        y=y2;
    }
})


function dibujarCirculo(x,y){
    contexto.beginPath();
    contexto.arc(x,y,tamaño,0,Math.PI*2);
    contexto.fillStyle=color;
    contexto.fill()
}

function dibujarLinea(x1,y1,x2,y2){
    contexto.beginPath();
    contexto.moveTo(x1,y1);
    contexto.lineTo(x2,y2);
    contexto.strokeStyle=color;
    contexto.lineWidth=tamaño*2;
    contexto.stroke();

}

function actualizarTamañoPantalla(){
    tamañoBtn.innerText=tamaño;
}

incrementoBtn.addEventListener('click',() =>{
    tamaño=+5;
    if(tamaño>50){
        tamaño=50;
    }

    actualizarTamañoPantalla();
})

decrementoBtn.addEventListener('click', ()=>{
    tamaño-=5;

    if(tamaño<5){
        tamaño=5;
    }

    actualizarTamañoPantalla();

})

colorBtn.addEventListener('change',(e)=>color=e.target.value);

limpiarBtn.addEventListener('click', ()=>contexto.clearRect(0,0, canvas.width, canvas.height ))