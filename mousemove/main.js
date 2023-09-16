const rect = document.querySelector("#center")
console.log(rect);

rect.addEventListener("mousemove",(details)=>{
    // console.log("you entered in a rectangle")
//    console.log(rect.getBoundingClientRect()) ;
   var rectangleLocation = rect.getBoundingClientRect();
    var insideRectVal= details.clientX - rectangleLocation.left
    
    // insideRectVal = Math.round(insideRectVal * 100) / 100;
    console.log(insideRectVal)
    if(insideRectVal < rectangleLocation.width/2){
        // console.log('left side')
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal)
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease:Power4
        })
    }
    else{
        // console.log('right side')
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal)
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease:Power4
        })
    }
})
rect.addEventListener("mouseleave",()=>{
    gsap.to(rect, {
        backgroundColor:"#fff"
    })
})
// console.log()