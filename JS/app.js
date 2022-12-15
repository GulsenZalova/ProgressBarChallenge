const progBtn=document.querySelector(".prog-btn")
const file=document.querySelector("#file")
const clickCount=document.querySelector(".clickCount")
const progressSituation=document.querySelector(".progressSituation")
let count=0
let isProgress=false
let progressValue=0
progBtn.addEventListener("click",function(){
    count+=1
    if(isProgress===false){
        file.value=0 
        proggressActive()
    }
    clickCount.innerHTML=count
})


function proggressActive(){
    isProgress=true
    progressValue+=1
    if(progressValue>100){
        count-=1
        progressValue=0
        clickCount.innerHTML=count
        if(count<1){
            isProgress=false
            file.value=0 
            return
        }
    }
    file.value=progressValue
    progressSituation.innerHTML=progressValue +"%"
    setTimeout(proggressActive,30)
}
