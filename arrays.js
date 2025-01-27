// let user1 = "Pranav";
// let user2 = "Aravind";
// let user3 = "Karthik";
// let user4 = "Shiva";
// let user5 = "Muzammil";
// let user6 = "Sanjay";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);
// console.log(user6);


// let users = ["Sanjay" , "Muzammil" , "Pranav", "Srivalli","pushpa"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i]);
// }


// let users = ["Sanjay" , "Muzammil" , "Pranav", "Srivalli","pushpa"];

// users.map((user ,i)=>{
//     console.log(user , i);
// })

// let x =users.map((user ,i)=>{
//     return user;
// });
// console.log(x);

// let x = users.forEach((user,i)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);


// let userDetails = {
//     name :"Akshay",
//     age:22,
//     city:"Hyderabad",
// };
// console.log(userDetails);
// console.log(userDetails.name);

// console.log(userDetails.city);

//! nested object
// let userDetails = {
//     name :"Akshay",
//     age:22,
//    address:{
//     city:"Hyderabad",
//     area:"siddipet",
//     streetNo : 123,
//     pincode : {
//         pin1:123456,
//         pin2:654321
//     }
//    }
// };
// console.log(userDetails.name);
// console.log(userDetails.address.city);
// console.log(userDetails.address.pincode.pin1);

// ! create array of objects
// let user1 ={
//     name:"sathvik",
//     city:"Karimnagar"
// }

// let user2={
//     name:"Raghu",
//     city:"ananthpur"
// }

// let user3={
//     name:"Shilpa",
//     city:"Kammam"
// }

// let user4={
//     name:"Bharath",
//     city:"Sathupalli"
// }

// console.log(user1.name);
// console.log(user2.name);

//let userDetails =[
  //{
    //  name:"sathvik",
      //city:"Karimnagar"
  //},
  //{
    //  name:"Raghu",
      //city:"ananthpur"
  //},
  //{
      //name:"Shilpa",
      //city:"Kammam"
  //},
  //{
    //  name:"Bharath",
  //    city:"Sathupalli"
 // }
//];

//userDetails.map((user)=>{
//console.log(user.name);
//})

//let userData ={
 //   name:"sathvik",
  //  age:25,
  //  city:"karimnagar"
//};
//console.log(userData.name , typeof(userData));

//let x = JSON.stringify(userData);
//console.log(x , typeof(x));

//let y = JSON.parse(x);
//console.log(y);

//let p1 = new Promise((resolve , reject)=>{})
//console.log(p1);

//let p2 = new Promise((resolve , reject)=>{
  //resolve("success");
//});
//console.log(p2);


//let p3 = new Promise((resolve , reject)=>{
 // reject("Failures");
//})

//p3
//.then(res=>console.log(res))
//.catch(err=>console.log(err))
//.finally(()=>console.log("final"))

function fetchUsers(){
  let response = fetch("http://jsonplaceholder.typicode.com/users");
  response.then(res=>{
    return res.json().then(data=>{
      console.log(data);
    })
  })
  .catch(err=>console.log(err))
}
fetchUsers();




