let myvar=setInterval(myclock,1000);
function myclock(){
var clock=new Date();
document.getElementById('digital-clock').innerHTML=clock.toLocaleTimeString('en-US',{hour12: false});
}
function myfunction(changeColor){  
document.querySelector(".watch-band").style.backgroundColor=changeColor;
document.querySelector(".watch-band1").style.backgroundColor=changeColor;

}
