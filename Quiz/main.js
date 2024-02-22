//Add event listener
document.getElementById("btn").addEventListener("click", btnClicked);
//Quiz marking function
function btnClicked(){
    //Set variables
    let count = 0;
    let question1 = document.getElementById("1-in").value;
    let question2 = document.getElementById("2-in").value;
    let question3 = document.getElementById("3-in").value;
    let question4 = document.getElementById("4-in").value;
    let output1 = document.getElementById("1-out");
    let output2 = document.getElementById("2-out");
    let output3 = document.getElementById("3-out");
    let output4 = document.getElementById("4-out");
    let output = document.getElementById("output");
    //If statements for answer correctness
    
   if(question1 == 3){
    count++
    document.getElementById("1-in").style.borderColor = 'green';
    output1.innerHTML = "correct";
} else{
    document.getElementById("1-in").style.borderColor = 'red';
    output2.innerHTML = "incorrect";
}
if(question2 == "Obi Wan Kenobi"){
    document.getElementById("2-in").style.borderColor = 'green';
    output2.innerHTML = "correct";
    count++
} else{
    document.getElementById("2-in").style.borderColor = 'red';
    output2.innerHTML = "incorrect"
}
if(question3 == "Return of The Jedi"){
    document.getElementById("3-in").style.borderColor = 'green';
    output3.innerHTML = "correct";
 count++
}else{
    document.getElementById("3-in").style.borderColor = 'red';
    output3.innerHTML = "incorrect";
}
if(question4 == "Chewbacca"){
    document.getElementById("4-in").style.borderColor = 'green';
    output4.innerHTML = "correct";
    count++
} else {
    document.getElementById("4-in").style.borderColor = 'red';
    output4.innerHTML = "incorrect";
}
    if(count == 1){
        output.innerHTML = "1/4, 25%";
    } else if(count == 2){
        output.innerHTML = "2/4, 50%";
    } else if(count == 3){
        output.innerHTML = "3/4, 75%";
    } else if(count == 4){
        output.innerHTML = "4/4, 100%";
    } else{
        output.innerHTML = "0/4, try again";
    }
}
