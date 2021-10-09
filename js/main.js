const carousel = document.querySelector(".carousel");
const arrowRigth= document.getElementById("arrow__rigth");
const arrowLeft= document.getElementById("arrow__left");
let flag=1;

arrowLeft.addEventListener('click',()=>{
    if(flag==0)
    {
        let position= flag*100;
        carousel.style.transform=`translateX(${position}%)`;
        flag++;
    }
});

arrowRigth.addEventListener('click',()=>{
    if(flag==1)
    {
        let position= flag*-100;
        carousel.style.transform=`translateX(${position}%)`;
        flag--;
    }
});



