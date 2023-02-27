let score = 0
function quiz() {
      let q1 = prompt("1. Is adapting to any new environment challenging for me?")
      if (q1.toLowerCase() == "yes" || q1.toLowerCase() =="y") {
      alert("Correct")
      score ++;
}
else{
    alert("Incorrect");
}
    let q2 = prompt("2. Is it true that I went to Central high school??")
    if (q2.toLowerCase() == "yes" || q2.toLowerCase() =="y") {
    alert("Correct")
    score ++;
}
else{
  alert("Incorrect");
}
    let q3 = prompt("3. Did I have any experience with Coding?")
    if (q3.toLowerCase() == "no" || q3.toLowerCase() =="n") {
    alert("Correct")
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
  
  let q6 = prompt("6. What year did I graduate high school?")
    if ( q6 == 2014 ) {
    alert("Correct")
    score ++;
}
else{
    alert("Incorrect");
}
if (q6 < 2014 ) {
  alert("Too Low!");
  score ++;
}
if (q6 > 2014 ) {
  alert("Too High!");
  score ++;

}

let answer = ["Dedication", "Understanding", "Determination", "Motivation", "Preparation", "Participation"];
let q7 = []; // prompt("7. What characteristics are shown in growth and adaptation?")
    
for (let i = 0; i < 6; i++) {
      q7.push(prompt("What characteristics are shown in growth and adaptation?"));

}
    console.log(q7);
    let correct = false; 
    //loop through user answers
    for (let j = 0; i < q7.length; i++) {
      //check each user answer against the correct answers
      for (let j = 0; j < answers.length; j++) {
        if (q7[i] == answers[j]) {
          correct = true;
          break;
        } else if (q7[i] != answers[j]) {
          correct = false;
        }
      }
    
//Respond with correctness
if (correct) {
  alert(q7[i] + "Was Correct!");
  //break;
} 
else {
  alert(q7[i] + "Was not correct");

}
  
    
//check if next answer was right
}

const q7 = ['Dedication', 'Understanding', 'Determination', 'Motivation', 'preparation', 'Particpation'];

let growth = 'Growth and Adaptation is';

for (let i = 0; i < answers.length; i++) {
  if (i === answers.length - 1) {   // We are at the end of the array
    Growth += `and ${q7[i]}.`
  } else {
    Growth += `${q7[i]}, `
  }
}

console.log(growth);     
// "Growth and adaptation is Dedication, Understanding, Determination, Motivation, Preparation, Participation."


}
