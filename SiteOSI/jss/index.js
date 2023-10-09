const isMobile ={
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return(
            isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.iOS()||
            isMobile.Opera()||
            isMobile.Windows()
        );
    }
};
if(isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.noactive');
    if(menuArrows.length>0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e){
                menuArrow.classList.toggle('_active');
            });
        }
    }
}
else{
    document.body.classList.add('_pc');
};
document.getElementById('menu_icon').onclick = function() {
    document.getElementById('menu_icon').classList.toggle('__active');
    document.getElementById('menu_body').classList.toggle('__active');
    document.body.classList.toggle('lock');
};

window.onscroll= function(){
    nav_scroll_function()
};

let n = document.getElementById('nav_container')
let sticky = n.offsetTop;
function nav_scroll_function(){
    if (window.pageYOffset>sticky) {
        n.classList.add("sticky");
    }
    else{
        n.classList.remove("sticky");
    };
};







