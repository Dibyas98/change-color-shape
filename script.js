let color=["red","green","cyan","black","voilet","blue","purple","rgb(155, 206, 12)","rgb(96, 25, 249)","rgb(98, 57, 94)"];
let shape=["inner","triangel","circle-1c","rect","paralal","diamond"]
let press=document.getElementById("press");

let cshape=document.getElementById("change-shape");
let cColor=document.getElementById("change-color");
cshape.addEventListener("click",changeshape);
cColor.addEventListener("click",change_color);
function change_color(){
    let randomIndex = Math.floor(Math.random() * color.length);
    document.getElementById("circle").style.backgroundColor = color[randomIndex];
    press.innerText="changed color";
    const ani=document.getElementById('change-color').classList;
        ani.add('change-background-animation')

        setTimeout(() => {
            ani.remove('change-background-animation');
        }, 500);
}
let i=document.getElementsByClassName("inner")[0];
function changeshape(){
    let randomIndex = Math.floor(Math.random() * shape.length);
    let ch=shape[randomIndex];
    press.innerText="changed Shape";
    i.className=`${ch}`;
    const ani=document.getElementById('change-shape').classList;
        ani.add('change-background-animation')

        setTimeout(() => {
            ani.remove('change-background-animation');
        }, 500);
    
}