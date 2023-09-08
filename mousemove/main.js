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
        console.log('left side')
    }
    else{
        console.log('right side')
    }
})