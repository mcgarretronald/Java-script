// const button =document.getElementById("button");
// const head = document.getElementById("h1")
// function h1_green(){
//     head.style.color ="green"

// }
// function h1_black(){
//     head.style.color="black"}
   


// button.addEventListener('mouseover',h1_green);
// button.addEventListener('mouseout',h1_black)


// // {
// //     Toggling function
// let bodyIsDefault = true
// function changeBackground(){
//          // document.body.style.backgroundColor = "violet"
//          if(bodyIsDefault){
//             document.body.style.backgroundColor = "violet"
//             bodyIsDefault = false
//          }else{
//             document.body.style.backgroundColor = "white"
//             bodyIsDefault = true
//          }
//     }
let documentdefault=true
function reverttitle(){
    if(documentdefault){
        const title = document.getElementById("myH1")
        title.style.color="pink"
        title.style.fontSize="3em"
        title.style.padding ="10px"
        title.style.margin ="4px"
        title.style.border="20px solid black"
        title.style.borderRadius="5px"
        documentdefault=false
    }else{
    const title = document.getElementById("myH1")
    title.style.color="red"
    title.style.fontSize="3em"
    title.style.padding ="10px"
    title.style.margin ="4px"
    title.style.border="2px solid black"
    title.style.borderRadius="5px"
    documentdefault =true
    
}
}
// function changetitle(){
//     const title = document.getElementById("myH1")
//     title.style.color="pink"
//     title.style.fontSize="3em"
//     title.style.padding ="10px"
//     title.style.margin ="4px"
//     title.style.border="20px solid black"
//     title.style.borderRadius="5px"
    
// }
const head= document.getElementById("head")
const button= document.getElementById("button")
button.addEventListener("click",change)
function change(){
    head.innerHTML = "Hello Dom"
    head.style.color="red"
    head.style.fontSize ="50px"
}





