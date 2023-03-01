let canvas = document.querySelector('canvas');

let divClientWidth = document.getElementById("sister").clientWidth;
console.log(divClientWidth);
let divClientHeight = document.getElementById("sister").clientHeight;
console.log(divClientHeight);


canvas.height = window.innerHeight;
canvas.width = divClientWidth;

// colores random dentro de un array

let colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#298CB9',
];
let colorArrayRandom = colorArray[Math.floor(Math.random() * colorArray.length)]
console.log(colorArrayRandom);
// event listenr - resize
window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = divClientWidth;
})
//ver el ancho disponible de la pantalla
/*var screenAvailWidth = window.screen.availWidth;
console.log(screenAvailWidth); */

// Obtener ancho de elemento de html teniendo en cuenta bordes
/* let divOffsetWidth = document.getElementById("sister").offsetWidth;
console.log(divOffsetWidth); */

// Obtener ancho de elemento de html sin tener en cuenta bordes
/*
let divClientWidth = document.getElementById("sister").clientWidth;
console.log(divClientWidth); */

let c = canvas.getContext('2d');

// Background color variables
let canvasColorWhite = "rgba(255,255,255,1)";
let canvasColorRed = "rgba(255,0,0,1)";
let canvasColorGreen = "rgba(0,255,0,1)";
let canvasColorBlack = "rgba(0,0,0,1)";
let canvasColorBlue = "rgba(0,0,255,1)";

// default color variables

let canvasBackground = canvasColorWhite;
canvas.style.background = canvasBackground;  // a valid CSS colour.

// stroke color variables

let strokeColorBlack = "rgba(0,0,0,1)";
let strokeColorRed = "rgba(255,0,0,1)";
let strokeColorGreen = "rgba(0,255,0,1)";
let strokeColorBlue = "rgba(0,0,255,1)";
let strokeColorEraser = "rgba(255,255,255,1)";

//colores
//color activado del pincel
var strokeColor = strokeColorBlack;


// color random
/*  Math floor = redondea el valor a un integer
    Math Random = devuelve un valor random entre 0 y 1 en decimales
    254 + 1 = es porque queremos un numero entre 1 y 255. y le sumamos uno para que en el conjunto de resultados pueda entrar el numero 255. 
*/
/* var col1 = Math.floor(Math.random() * 254) + 1;
var col2 = Math.floor(Math.random() * 254) + 1;
var col3 = Math.floor(Math.random() * 254) + 1;
var strokeColorRandom = "rgba("+col1+","+col2+","+col3+",1)";
console.log(strokeColorRandom); */

// stroke size variables
var strokeSize = 1;
console.log(strokeSize)

// show Javascript result in html
document.getElementById("strokeSize").innerHTML = strokeSize;

// stroke size variables
let strokeSizeIncrement = document.getElementById('masSize');
let strokeSizeDecrement = document.getElementById('menosSize');

// stroke size functions
strokeSizeIncrement.addEventListener('click', function (e) {
    if (strokeSize > 9) {
        strokeSize = 10,
            console.log('Menor o igual a 10'),
            document.getElementById("strokeSize").innerHTML = strokeSize;
    }
    else return ++strokeSize,
        console.log('incrementing size to ' + strokeSize),
        document.getElementById("strokeSize").innerHTML = strokeSize;
});

strokeSizeDecrement.addEventListener('click', function (e) {
    if (strokeSize >= 2) {
        return --strokeSize,
            console.log('decrementing size to ' + strokeSize),
            document.getElementById("strokeSize").innerHTML = strokeSize
    }
});

// change color variables
let buttonClickBlack = document.getElementById('BlackBtn');
let buttonClickRed = document.getElementById('RedBtn');
let buttonClickGreen = document.getElementById('GreenBtn');
let buttonClickBlue = document.getElementById('BlueBtn');
let buttonClickRandom = document.getElementById('RandomBtn');

// stroke color functions
buttonClickBlack.addEventListener('click', function (e) {
    strokeColor = strokeColorBlack;
    console.log('The stroke color is ' + strokeColor);
});
buttonClickRed.addEventListener('click', function (e) {
    strokeColor = strokeColorRed;
    console.log('The stroke color is ' + strokeColor);
});
buttonClickGreen.addEventListener('click', function (e) {
    strokeColor = strokeColorGreen;
    console.log('The stroke color is ' + strokeColor);
});
buttonClickBlue.addEventListener('click', function (e) {
    strokeColor = strokeColorBlue;
    console.log('The stroke color is ' + strokeColor);
});
buttonClickRandom.addEventListener('click', function (e) {
    var col1 = Math.floor(Math.random() * 254) + 1;
    var col2 = Math.floor(Math.random() * 254) + 1;
    var col3 = Math.floor(Math.random() * 254) + 1;
    var strokeColorRandom = "rgba(" + col1 + "," + col2 + "," + col3 + ",1)";
    strokeColor = strokeColorRandom;
    console.log('The stroke color is ' + strokeColor);
});



// change bg color variables
let canvasClickWhite = document.getElementById('whiteCvnBtn');
let canvasClickBlack = document.getElementById('blackCvnBtn');
let canvasClickRed = document.getElementById('redCvnBtn');
let canvasClickGreen = document.getElementById('greenCvnBtn');
let canvasClickBlue = document.getElementById('blueCvnBtn');
let canvasClickRandom = document.getElementById('randomCvnBtn');

// Background color functions
canvasClickWhite.addEventListener('click', function (e) {
    canvasBackground = canvasColorWhite;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasBackground);
});
canvasClickBlack.addEventListener('click', function (e) {
    canvasBackground = canvasColorBlack;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasBackground);
});
canvasClickRed.addEventListener('click', function (e) {
    canvasBackground = canvasColorRed;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasBackground);
});
canvasClickGreen.addEventListener('click', function (e) {
    canvasBackground = canvasColorGreen;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasBackground);
});
canvasClickBlue.addEventListener('click', function (e) {
    canvasBackground = canvasColorBlue;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasBackground);
});
canvasClickRandom.addEventListener('click', function (e) {
    var col1 = Math.floor(Math.random() * 254) + 1;
    var col2 = Math.floor(Math.random() * 254) + 1;
    var col3 = Math.floor(Math.random() * 254) + 1;
    var canvasColorRandom = "rgba(" + col1 + "," + col2 + "," + col3 + ",1)";
    canvasBackground = canvasColorRandom;
    canvas.style.background = canvasBackground;  // a valid CSS colour.
    console.log('The canvas color is ' + canvasColorRandom);
});


// draw functions
var painting = undefined; //draw variable

function startPosition(e) {
    painting = true;
    draw(e);
}
function finishedPosition() {
    painting = false;
    c.beginPath();
}

function draw(e) {
    if (!painting) return;

    c.strokeStyle = strokeColor;
    c.fillStyle = strokeColor;
    c.lineWidth = strokeSize;
    c.lineCap = 'round';

    c.lineTo(e.clientX, e.clientY);
    c.stroke();
    c.beginPath();
    c.moveTo(e.clientX, e.clientY);
    // console.log('Y = '+e.clientY+' X = '+e.clientX);
}

// Eventlisteners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
