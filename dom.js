//let ele = document.getElementsByClassName("test");
//ele[0].style.backgroundColor="dodgerblue"
//console.log(ele);
//console.log(Array(ele));//this method used to check whether the arry is pre array.

//! SPread operator:- This operator is used to take out each and every value from 
//!Original array and store it in one more new array (pure array).

//Syntax of Sread  - [...varaible]

//let x = [...ele];
//console.log(x , Array.isArray(x));
//x.map(element=>{
  //  element.style.backgroundColor="tomato";
    //element.style.color="white";
    //element.style.textTransform = "uppercase";
//})

//let ele = document.querySelector("#demo");
//console.log(ele);
//let ele = document.querySelector(".test");
//console.log(ele);
 //let ele = document.querySelectorAll(".test");
//  console.log(ele);

let bgcolor = document.querySelectorAll(".bgcolor");
//console.log(bgcolor);
[...bgcolor].map(element=>{
  //console.log(element);
  element.addEventListener("mouseover",()=>{
    //console.log(element.innerText);
    element.computedStyleMap.backgroundcolor = element.innerText;
  })
  element.addEventListener("mouseleave",()=>{
    //console.log(element.innerText);
    element.computedStyleMap.backgroundcolor = "transparent"
  })
})


