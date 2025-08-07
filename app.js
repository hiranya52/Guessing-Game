let number=Math.floor((Math.random()*10)+1);
//let number=2;
let count=0;

//alert("Guess a number between 1-10")

Swal.fire("Guess a number between 1-10.....You have 3 rounds");

function checkNum(){
    let userInput=document.getElementById("userInput").value;
    let message="";
    if(count<3){
        if(number>userInput){
            //message="Your number is lesser.."
            Swal.fire({
              position: "top-end",
              title: "Your number is lesser...",
              showConfirmButton: false,
              timer: 1500
            });
        }else if(number<userInput){
            //message="Your number is greater.."
            Swal.fire({
              position: "top-end",
              title: "Your number is greater...",
              showConfirmButton: false,
              timer: 1500
            });
        }else if(number==userInput){
            //message="You are correct.."
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Yeah! You are Correct...",
                showConfirmButton: false,
                timer: 1500
              });
        }
        count++;
         }else if(count== 3 && userInput!==number){
            //message="Your rounds are over";
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Your rounds are over..!"
              });
         }
         document.getElementById("txt").innerText=message;
         console.log("message");
}