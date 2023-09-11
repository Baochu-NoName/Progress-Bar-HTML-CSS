// Straight progress bar
var i = 0

function move(){
    if(i==0){
        i = 1
        var elem = document.getElementById("myBar")
        var width = 1

        var id = setInterval(frame, 20)
        function frame(){
            if(width >= 100){
                clearInterval(id)
                i = 0;
            }else if(width >= 25 && width <= 75){
                elem.style.backgroundColor = "#ffbf00"
                width++
                elem.style.width = width + "%"
                elem.innerHTML = width + "%"
            } else if(width > 75 && width < 100){
                elem.style.backgroundColor = "green"
                width++
                elem.style.width = width + "%"
                elem.innerHTML = width + "%"
                } else{
                elem.style.backgroundColor = "red"
                width++
                elem.style.width = width + "%"
                elem.innerHTML = width + "%"
            }
        }

    }
}
// Circular Progress Bar
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 100,    
    speed = 10;

let progress = setInterval(()=> {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#FF2D05 ${ progressStartValue * 3.6}deg, #bcbcbc 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    //console.log(progressStartValue);
}, speed);


