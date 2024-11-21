const questions = [
    {
      question: "Who write first version of HTML?",
      options: ["Tim Berners-Lee", "Hakon Wium Lie", "Brendan Eich", "Dennis Ritchie"],
      answer: "Tim Berners-Lee"
    },
    {
      question: "Which game is best?",
      options: ["BGMI", "Free_fire", "genshin_impact", "Minecraft"],
      answer: "genshin_impact"
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  
  function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("question").innerText = question.question;

    const optionsElement = document.getElementById("options");

    optionsElement.innerHTML = "";

    question.options.forEach(option => {
      const inp = document.createElement("input");
      inp.setAttribute("type", 'radio'); 
      const label = document.createElement("label");
      label.innerText = option;
      inp.innerText = option;
      inp.addEventListener("click", () => {
        checkAnswer(option);
      });
      optionsElement.appendChild(inp);
      optionsElement.appendChild(label);
    });
  }
  
  function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
      score++;
    } else {
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("question").innerText = "Quiz Over!" ;
    timeLeft = 1;
    document.getElementById("options").innerHTML = "";
    document.getElementById("submit").disabled = true;
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;
    document.getElementById("timer").innerText = "Time's up!";
  }

  function countdown() {
    timeLeft--;
    document.getElementById("timer").innerText = `${timeLeft} seconds`;
    
    if (timeLeft <= 0) {
        currentQuestion++;
        showQuestion();
    } else {
      setTimeout(countdown, 1000);
    }
  }
  
  showQuestion();
  countdown();