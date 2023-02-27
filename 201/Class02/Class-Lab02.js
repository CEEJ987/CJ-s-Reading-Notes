let score = 0
function quiz() {
      let q1 = prompt("1. Is adapting to any new environment challenging for me?")
      if (q1.toLowerCase() == "yes" || q1.toLowerCase() =="y") {
      alert("correct")
      score ++;
}
else{
    alert("incorrect");
}
    let q2 = prompt("2. Is it true that I went to Central high school??")
    if (q2.toLowerCase() == "yes" || q2.toLowerCase() =="y") {
    alert("correct")
    score ++;
}
else{
  alert("incorrect");
}
    let q3 = prompt("3. Did I have any experience with Coding?")
    if (q3.toLowerCase() == "no" || q3.toLowerCase() =="n") {
    alert("correct")
    score ++;
}
else{
  alert("Incorrect");
}
    let q4 = prompt("4. Was it hard for me to make the decision to join this program?")
    if (q4.toLowerCase() == "yes" || q4.toLowerCase() =="y") {
    alert("Correct")
    score ++;
}
else{
  alert("Incorrect");
}
    let q5 = prompt("5. Would I recommend someone to this program?")
    if (q5.toLowerCase() == "yes" || q5.toLowerCase() =="y") {
    alert("Correct")
    score ++;
}
else{
  alert("Incorrect");
}
  
  let q6 = prompt("6. What year did i graduate high school?")
    if (q6.toLowerCase() == "2014" || q6.toLowerCase() =="2014") {
    alert("Correct")
    score ++;
}
else{
    alert("Incorrect");
}

}
