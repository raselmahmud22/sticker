console.time('your took time');
document.querySelector('body')
.addEventListener('mousemove',eyeball);
function eyeball(){
    var eye1 =document.querySelectorAll
    ('.eye1');
    eye1.forEach(function(eye1){
        let x =(eye1.getBoundingClientRect()
        .left)+(eye1.clientWidth/2);
        let y =(eye1.getBoundingClientRect()
        .top) +(eye1.clientHeight/2);
        let radian =Math.atan2(event.pageX -
        x,event.pageY-y);
        let rot =(radian*(180/Math.PI)*
        -1)+0;
        eye1.getElementsByClassName.transform="rotate("+rot
        +"deg)";
        
    })
}
console.timeEnd('your took time');