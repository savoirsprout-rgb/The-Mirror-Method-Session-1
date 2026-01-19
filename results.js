const score=parseInt(localStorage.getItem("score"))||0;

let type="Quiet Adapter";
let text="You have learned to adapt quietly to what life asks of you. You are observant, thoughtful, and emotionally aware. You often sense what is needed before it is spoken. The cost of this strength is that your own needs can fade into the background. This reflection invites you to turn that same care inward.";

if(score>20){
type="Emerging Self";
text="You are beginning to see yourself more clearly. Awareness is growing, and with it comes the sense that change is possible. You are not rushing. You are noticing. This stage is about honesty, patience, and allowing clarity to form naturally.";
}

document.getElementById("type").innerText=type;
document.getElementById("result").innerHTML="<p>"+text+"</p><p>This reflection represents your current inner state. As you change, this reflection can change too.</p>";
