var data=[
    {
        question:"what is what?",
        options:["what","huh","alright"],
        ans:"ok"
    },
    {
        question:"",
        options:[],
        ans:"ok"
    },
    {
        question:"",
        options:[],
        ans:"ok"
    },
    {
        question:"",
        options:[],
        ans:"ok"
    }
];

let curr=0;
let timer;
let timeleft=10;
let score=0;

const prog=document.getElementById("progress");
const ques=document.getElementById("question");
const time=document.getElementById("timer");
const option=document.getElementById("options");
const out=document.getElementById("output");
const s=document.getElementById("score");
const btn=document.getElementById("btn");

function addque(){
    starttimer();

    let q = data[curr];
    ques.textContent = q.question;

    q.options.forEach(opt => {
        let b = document.createElement("button");
        b.classList = 
        b.textContent = opt;
        b.onclick = function(){
            correctans(b,q.ans)
        }
        option.appendChild(b);
    });
}

function starttimer(){

}

function correctans(){
    if(b.textContent===q.ans){
        score++;
        out.textContent = "Correct";
        s.innerHTML = "Score" + score;
    }
}

addque();