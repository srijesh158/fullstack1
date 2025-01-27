// let ele = document.createElement("h1");
// ele.innerText= "dynamic creation of html element";
// // ele.id = "demo"
// ele.setAttribute("id" , "demo")
// console.log(ele);

// // ele.removeAttribute("id");
// document.body.appendChild(ele);


// let image = document.createElement("img");
// image.src= "./3606208.jpg";
// console.log(image);

// document.body.appendChild(image) 


// let form = document.querySelector("form");
// let username = document.querySelector("#uName");
// let email = document.querySelector("#uMail");
// let psw = document.querySelector("#uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(username.value);
//     let name =username.value;
//     let mail = email.value;
//     let password = psw.value;
//     let userDetails={
//         name:name,
//         mail : mail,
//         password:password
//     } ;
//     // console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })


// // localStorage.clear()

document.addEventListener("DOMContentLoaded", () => {
    let mainEle = document.createElement("div");
    mainEle.id = "mainblock";
  
    let topEle = document.createElement("div");
    topEle.className = "topBlock";
  
    let bottomElement = document.createElement("div");
    bottomElement.className = "bottomBlock";
  
    mainEle.appendChild(topEle);
    mainEle.appendChild(bottomElement);
  
    let img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg";
    img.width="300"
    img.height="300"
    img.style.objectFit="cover"
    topEle.appendChild(img);
  
    document.body.appendChild(mainEle);
    let h1=document.createElement("h1")
    h1.innerText="CAT"
    let btn=document.createElement("button")
    btn.innerText="View More";
    bottomElement.appendChild(h1)
    bottomElement.appendChild(btn)
  });



let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
// console.log(gender);

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )
})