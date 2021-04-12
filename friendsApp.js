const quizData = [
    {
        question: 'Which Friend heard Ben speak first?',
        a: 'Ross',
        b: 'Monica',
        c: 'Joey',
        d: 'Rachel',
        correct: 'd'
    }, {
        question: 'What was Monica\'s nickname on her high school field hockey team?',
        a: 'Big Fat Monica',
        b: 'Big Fat Hottie',
        c: 'Big Fat Goalie',
        d: 'Big Fat Holy Moly',
        correct: 'c'
    }, {
        question: 'Which Friend did not go to high school?',
        a: 'Phoebe',
        b: 'Ross',
        c: 'Joey',
        d: 'Monica',
        correct: 'a'
    }, {
        question: 'Which Friend bought a pair of leather pants',
        a: 'Chandler',
        b: 'Ross',
        c: 'Phoebe',
        d: 'Monica',
        correct: 'b'
    }, {
        question: 'Which Friend is an actor?',
        a: 'Monica',
        b: 'Rachel',
        c: 'Chandler',
        d: 'Joey',
        correct: 'd'
    }, {
        question: 'Which Friend is likely to use the acronym W.E.N.U.S?',
        a: 'Phoebe',
        b: 'Joey',
        c: 'Chandler',
        d: 'Monica',
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You got a score of ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Try Again </button>`;
        }
    }
});  