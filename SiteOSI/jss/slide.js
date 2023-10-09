let elements = document.querySelectorAll('.sliders');
let counter = 0;
function plusSlides(n) {
    clearInterval();
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display='none';
    }
    if(counter+n>elements.length-1)  counter=-1;
    if (counter+n==-1) counter=elements.length;
    elements[counter+=n].style.display='grid';
}
setInterval(function(){
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display='none';
    }
        if(counter>elements.length-1)
        counter=0;
        elements[counter].style.display='grid';
        counter++;
    },10000);