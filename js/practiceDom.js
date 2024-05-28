// const myPar = document.getElementById("some_id")
// console.log(myPar);

// // const myPar2 = document.getElementsByTagName("p");
// // // console.log(myPar2);

// // const elementsClass =document.getElementsByClassName("example_class")
// // // console.log(elementsClass);

// // for(let i =0; i<elementsClass.length;i++){
// //     console.log(elementsClass[i]);

// //     const elementsByQuery = document.querySelectorAll('p.example_class')
// // }
// myPar.innerHTML="changed text by java"
// console.log(myPar);
// myPar.innerHTML=`<h1 style="color: green;">HELLO DOM with JS</h1>`;

const myImage=document.getElementById('sampleImage')



function changeStyle() {
    const myH1= document.getElementById('some_id')
    myH1.style.color="green"
    myH1.style.fontSize="50px"
    myImage.src= "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

}