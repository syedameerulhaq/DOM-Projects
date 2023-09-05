var main=document.querySelector(".main");
var cursor=document.querySelector(".cursor");

main.addEventListener("mousemove",function(xx){
    cursor.style.left =xx.x+"px";
    cursor.style.top =xx.y+"px";

})
