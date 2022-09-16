const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn--1")
let btn2 = document.getElementById("btn--2")
let btn3 = document.getElementById("btn--3")

btn.addEventListener("click", function key(){
    let count = []
    let countTwo = []
    btn2.value = ''
    btn3.value = ''
    // btn2.textContent = ''
    // btn3.textContent = ''
    passOne()
    passTwo()

    function passOne(){
        for(let i =0; i < 16; i++){
            let num1 = Math.floor(Math.random() * 90)
            count.push(num1)
        }
        for(let i = 0; i < count.length; i++){
            btn2.value += characters[count[i]]
        }
    }    
    function passTwo(){
        for(let i =0; i < 16; i++){
            let num1 = Math.floor(Math.random() * 90)
            countTwo.push(num1)
        }
        for(let i = 0; i < countTwo.length; i++){
            btn3.value += characters[countTwo[i]]
        }
    }
     console.log(count)
})

btn2.addEventListener("click", function(){
   btn2.select();
   document.execCommand("Copy");
   alert("Copied to clipboard!");
 });
 
btn3.addEventListener("click", function(){
   btn3.select();
   document.execCommand("Copy");
   alert("Your password was copied to clipboard!");
 });