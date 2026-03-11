let terra;

function preload(){
    terra = loadImage('terra.jpg')
}
function setup() {
    createCanvas(1920,1080, WEBGL);//plano 3D
}

function draw() {
    background(205, 102, 94);//cor de fundo
    rotateY(millis()/1000);//rotação a terra
    textTure(terra);//textura da terra, imagem.
    Sphere (80, 100);//esera 3D
}