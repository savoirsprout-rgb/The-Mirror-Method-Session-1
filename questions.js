const questions=[
"Right now, your life feels:",
"When something feels emotionally heavy, you usually:",
"You trust your own decisions:",
"When life slows down, you feel:",
"You feel most like yourself when:",
"When something ends, you usually:",
"Your energy lately feels:",
"When overwhelmed, you tend to:",
"You feel most disconnected when:",
"Your inner voice is usually:",
"You recover emotionally:",
"You often put your needs:",
"You feel most stable when:",
"You handle uncertainty by:",
"You feel understood when:",
"You usually carry:",
"You avoid conflict by:",
"You feel aligned when:",
"You feel pressure when:",
"You trust others:",
"You feel strongest when:",
"You rest by:",
"You express emotions by:",
"You fear most:",
"You feel calm when:",
"You handle failure by:",
"You feel hopeful when:",
"You feel tired when:",
"You feel clarity when:",
"Right now, you feel:"
];

const options=[
["Stable but muted","Unclear","Heavy","Ready for change"],
["Hold it in","Talk it out","Distract yourself","Overthink"],
["Most of the time","Sometimes","Rarely","Only after thinking a lot"],
["Relieved","Restless","Anxious","Neutral"],
["Alone","Helping others","Creating","Thinking"],
["Reflect deeply","Move on quickly","Feel stuck","Stay functional"],
["Balanced","Low","Inconsistent","Quietly drained"],
["Withdraw","Push through","Seek reassurance","Analyze"],
["Rushed","Emotionally drained","Unseen","Disconnected"],
["Supportive","Critical","Gentle","Quiet"],
["Slowly","Quickly","In waves","With effort"],
["Last","Middle","First","Only when needed"],
["Environment is calm","Expectations are clear","Accepted","Useful"],
["Planning","Waiting","Overthinking","Adapting"],
["Safe","Heard","Valued","Calm"],
["Emotions quietly","Responsibility","Hope","Pressure"],
["Staying quiet","Explaining","Avoiding","Adjusting"],
["Values guide you","Mind is clear","Emotions settle","Honesty"],
["Expectations rise","You feel rushed","Others depend","Unclear"],
["Carefully","Easily","Rarely","Selectively"],
["Honest","Needed","Calm","Prepared"],
["Being alone","Sleeping","Disconnecting","Doing nothing"],
["Internally","Writing","Talking","Silence"],
["Losing direction","Disappointing","Misunderstood","Stuck"],
["Nothing demanded","Accepted","Safe","Understood"],
["Reflecting","Trying again","Being gentle","Self-blame"],
["Aligned","Supported","Rested","Hopeful"],
["Ignoring yourself","Overgiving","Overthinking","Pressure"],
["Slowing down","Honest","Grounded","Accepted"],
["Ready for change","Uncertain","Heavy","Hopeful"]
];

let i=0;
let score=0;

const q=document.getElementById("question");
const a=document.getElementById("answers");
const p=document.getElementById("progress");

function load(){
p.innerText="Question "+(i+1)+" of 30";
q.innerText=questions[i];
a.innerHTML="";
options[i].forEach(t=>{
const d=document.createElement("div");
d.className="option";
d.innerText=t;
d.onclick=()=>next();
a.appendChild(d);
});
}

function next(){
score++;
i++;
if(i<questions.length){load();}
else{
localStorage.setItem("score",score);
window.location.href="results.html";
}
}

load();
