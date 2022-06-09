const img = document.getElementById('img');
const prev = document.getElementById('prev_btn');
const next = document.getElementById('next_btn');
const slider_div= document.getElementById('slider_div') 

const images= [
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",

];
let currentImg = 0;


function changeImg() {
    const newIMg = ` <img id="img" src=${images[currentImg]} alt="" width="380px" height="600px" id = "img" class = "animate__animated animate__fadeInRight">`
    
    slider_div.innerHTML = newIMg;
   

}

next.addEventListener('click',()=>{
    currentImg++;
    if(currentImg >= images.length){
        currentImg = 0;
    }
    changeImg();
});
prev.addEventListener('click',()=>{

    currentImg --;
    if(currentImg <0) {
        currentImg = images.length-1;
    }
   
    changeImg();
});
setInterval(function() {
    currentImg++;
    if(currentImg >= images.length){
        currentImg = 0;
    }
    changeImg();
    
}, 3000);