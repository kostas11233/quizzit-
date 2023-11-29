const questions = [
    {
        question: "What's the heaviest organ in the human body? ",
        options: ["Brain", "Liver", "Skin", "Heart"],
        correctAnswer: 2
    },
    {
        question: "Apart from water, what is the most popular drink in the world?",
        options: ["Tea", "Coffee", "Beer", "Orange Juice"],
        correctAnswer: 1
    },
    {
        question: "In what country was The Lord of the Rings trilogy shot?",
        options: ["New Zealand", "Croatia", "Iceland", "Ireland"],
        correctAnswer: 1
    },
    {
        question: "What color pill does Neo take in The Matrix?",
        options: ["Blue", "Red", "Black", "Purple"],
        correctAnswer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        correctAnswer: 1
    },

    {
        question: "Which Friends character's famous pickup line is “How you doin'?",
        options: ["Joey", "Ross", "Chandler", "Mike"],
        correctAnswer: 1
    },
    {
        question: "How high is Mount Everest?",
        options: ["5,849 m", "6,849 m", "7,849 m", "8,849 m"],
        correctAnswer: 4
    },
    {
        question: "Name the person who replaced Ozzy Osbourne as Black Sabbath ‘s lead singer?",
        options: ["Ronnie James Dio", "Judas Priest", "Dokken", "Bruce Dickinson"],
        correctAnswer: 1
    },
    {
        question: "At what age Valentino Rossi became the first Rider to contest his 400th Grand Prix?",
        options: ["39", "50", "40", "29"],
        correctAnswer: 3
    },
    {
        question: "Which one of the following companies has a mermaid in its logo?",
        options: ["Twitter", "Starbucks", "Target", "Mc Donalds"],
        correctAnswer: 2
    },
];


let i=0;
let score=0; 

function startQuiz() {
    document.getElementById('box').style.display = 'block';
    document.getElementById('welcome').style.display = 'none';
    document.getElementById("counter_container").style.display="flex"
    document.getElementById("counter").style.display="block"
    document.getElementById("counter").innerText= "Question 1 of " + questions.length
    document.getElementById("Question").innerText = questions[i].question;
    document.getElementById("option1").innerText = questions[i].options[0];
    document.getElementById("option2").innerText = questions[i].options[1];
    document.getElementById("option3").innerText = questions[i].options[2];
    document.getElementById("option4").innerText = questions[i].options[3];

}



function displayNext() {
    if (!document.querySelector('input[name="option"]:checked')) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('box').style.marginTop = "3%";}

    
        else  if (i < questions.length - 1) {
            i=i+1
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById("Question").innerText = questions[i].question;
        document.getElementById("option1").innerText = questions[i].options[0];
        document.getElementById("option2").innerText = questions[i].options[1];
        document.getElementById("option3").innerText = questions[i].options[2];
        document.getElementById("option4").innerText = questions[i].options[3];
        document.getElementById("counter").innerText="Question "+ (i+1) + " of " + questions.length;
        console.log(score);
    } else {
        // No more questions, display final score or do something else
        console.log("Quiz completed. Final score: " + score);
        document.getElementById('box').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').innerText="You are done! Your score is: " + score + "/"+ questions.length;
        document.getElementById('tryagain').style.display = 'block';
        document.getElementById('review').style.display = 'block';
        i=0;
        score=0;
        document.getElementById('errorMessage').style.display = 'none';
    }
    
    var radio = document.querySelector('input[name="option"]:checked');
    radio.checked = false;
}





function addScore() {
    const answer = document.querySelector('input[name="option"]:checked')?.value;

    // Correct answers are represented as numbers, so use strict comparison (===)
    console.log(i);
    if (parseInt(answer) === questions[i].correctAnswer) {
        score = score + 1;
    }
    // i = i + 1; 
    console.log("Current score: " + score);
}

function playAgain(){

    document.getElementById('box').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('tryagain').style.display = "none";
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('review').style.display = 'none';
    document.getElementById("counter_container").style.display="none"
    document.getElementById("counter").style.display="none"
    document.getElementById('quiz-container').style.display = 'none';

}

function review() {

    document.getElementById("box").style.display="none";
    document.getElementById("results").style.display="none";
    document.getElementById("counter").style.display="none";
    document.getElementById("counter_container").style.display="none";
    document.getElementById("tryagain").style.display="none";
    document.getElementById("review").style.display="none";
    document.getElementById('quiz-container').style.display = 'flex';



    const quizContainer = document.getElementById('quiz-container');

    questions.forEach((questionObj, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question-container';

      // Display the question
      const questionText = document.createElement('p');
      questionText.textContent = `${index + 1}. ${questionObj.question}`;
      questionDiv.appendChild(questionText);

      // Display the options
      const optionsList = document.createElement('ul');
      optionsList.className = 'options';

      questionObj.options.forEach((option, optionIndex) => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option;

        // Highlight the correct answer
        if (optionIndex === questionObj.correctAnswer - 1) {
          optionItem.classList.add('correct-answer');
        }

        optionsList.appendChild(optionItem);
      });

      questionDiv.appendChild(optionsList);

      // Add the question div to the quiz container
      quizContainer.appendChild(questionDiv);
    });

    document.getElementById('tryagain').style.display = 'block';
}