//first part is asking for the HTML element the second part is modifying the HTML element
//document.getElementById("count").innerText =5
let saveEL=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
console.log(saveEL);

  //a function which helps to write a code which increase a number(on a click)
function increment(){
   count+=1 //or count=count+1
   countEl.textContent=count   //we want the innerText (0)to be =count for our numbers to show on the browser
   console.log(count);
 }

 function save(){  //This function is used to save whatever we have countered
    let countStr= count + " - "//this create spaces for the numbers

    saveEL.textContent +=countStr//this increase the the number you enter after each count

    countEl.textContent=0
    count=0
 }

