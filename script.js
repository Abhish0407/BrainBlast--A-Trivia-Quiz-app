const quizQuestions = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H₂O₂", "CO₂", "H₂O", "O₂"],
    correctAnswer: "H₂O"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Cytoplasm", "Mitochondria", "Ribosome"],
    correctAnswer: "Mitochondria"
  },
  {
    question: "Who was the first man to walk on the moon?",
    options: ["Buzz Aldrin", "Michael Collins", "Neil Armstrong", "Yuri Gagarin"],
    correctAnswer: "Neil Armstrong"
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1910", "1912", "1915", "1918"],
    correctAnswer: "1912"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "The Great Wall of China was built to protect against which invaders?",
    options: ["Mongolians", "Romans", "Vikings", "Persians"],
    correctAnswer: "Mongolians"
  },
  {
    question: "What document was signed in 1776, declaring the independence of the United States?",
    options: ["The Bill of Rights", "The U.S. Constitution", "The Declaration of Independence", "The Articles of Confederation"],
    correctAnswer: "The Declaration of Independence"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River"
  },
  {
    question: "What is the highest mountain in Africa?",
    options: ["Mount Everest", "Mount Kilimanjaro", "Mount Kenya", "Mount Fuji"],
    correctAnswer: "Mount Kilimanjaro"
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Nauru"],
    correctAnswer: "Vatican City"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What fictional city is the home of Batman?",
    options: ["Metropolis", "Star City", "Gotham City", "Central City"],
    correctAnswer: "Gotham City"
  },
  {
    question: "What is the primary color missing from the rainbow?",
    options: ["Red", "Green", "Pink", "Orange"],
    correctAnswer: "Pink"
  },
  {
    question: "Who painted 'The Starry Night'?",
    options: ["Leonardo da Vinci", "Claude Monet", "Vincent van Gogh", "Pablo Picasso"],
    correctAnswer: "Vincent van Gogh"
  },
  {
    question: "Which book series features a wizard named Harry Potter?",
    options: ["The Chronicles of Narnia", "The Lord of the Rings", "Harry Potter", "Twilight"],
    correctAnswer: "Harry Potter"
  }
];

// Variables to keep track of the quiz state
let currentQuestionIndex = 0;
let score = 0;

// Get HTML elements
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

// A function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none'; // Hide the button initially
    resultContainer.textContent = ''; // Clear any previous score
    showQuestion();
}

// A function to display a question and its options
function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = ''; // Clear previous question content
    
    // Create the question element
    const questionElement = document.createElement('h2');
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    questionContainer.appendChild(questionElement);
    
    // Create the options container
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
    
    // Loop through options and create buttons for each
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        
        // Add a click event listener to each button
        button.addEventListener('click', () => selectAnswer(option, currentQuestion.correctAnswer));
        optionsContainer.appendChild(button);
    });
    
    questionContainer.appendChild(optionsContainer);
}

// A function to handle a selected answer
function selectAnswer(selectedOption, correctAnswer) {
    // Disable all option buttons after one is clicked
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
        if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    
    // Check if the selected answer is correct and update the score
    if (selectedOption === correctAnswer) {
        score++;
    }
    
    // Show the "Next" button
    nextButton.style.display = 'block';
}

// A function to show the final score
function showScore() {
    questionContainer.innerHTML = ''; // Clear the quiz
    nextButton.style.display = 'none'; // Hide the button
    resultContainer.textContent = `Quiz finished! You scored ${score} out of ${quizQuestions.length}.`;
}

// Add an event listener to the "Next" button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Start the quiz when the page loads
startQuiz();