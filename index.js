const cuadricula=document.querySelector("#cuadricula");
function displayCuadricula(tamano){
    let ancho="";
    let data="";
    for (let i = 0; i < tamano; i++) {
        ancho+="<td></td>";
    }    
    for (let i = 0; i < tamano; i++) {
        data+=`<tr>${ancho}</tr>`;
    }
    cuadricula.innerHTML=data;
    eventPintar();
}
//displayCuadricula(100);
function randomColor(){
    return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}
function eventPintar(){
    document.querySelectorAll("td").forEach(td=>{
        td.addEventListener(
            "mouseover",
            ()=>{
                if(!td.style.backgroundColor)td.style.backgroundColor=randomColor();
                else{
                    let rgb=td.style.backgroundColor.split("");
                    rgb=rgb.slice(4,rgb.length-1);
                    rgb=rgb.join("");
                    rgb=rgb.split(",");
                    let newrgb=`rgb(${parseInt(rgb[0])-25},${parseInt(rgb[1])-25},${parseInt(rgb[2])-25})`;
                    td.style.backgroundColor=newrgb;
                }
            }
        )
    });
}
document.getElementById("newCuadricula").addEventListener(
    "click",
    ()=>{
        let tamano=0;
        do {
            tamano=prompt("Elige las dimensiones de tu nueva cuadrícula [1-100]");
            console.log(tamano);
        } while (tamano<1 || tamano>100);
        displayCuadricula(tamano);
    }
)