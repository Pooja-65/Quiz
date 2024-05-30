document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correct = document.getElementById('correct').value;

    addQuestionToList({ question, options: [option1, option2, option3, option4], correct });
    this.reset();
});

function addQuestionToList(questionObj) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Question:</strong> ${questionObj.question}<br>
        <strong>Options:</strong> <br>
        1. ${questionObj.options[0]} <br>
        2. ${questionObj.options[1]} <br>
        3. ${questionObj.options[2]} <br>
        4. ${questionObj.options[3]} <br>
        <strong>Correct Option:</strong> ${questionObj.correct} <br>
        <button onclick="editQuestion(this)">Edit</button>
        <button onclick="deleteQuestion(this)">Delete</button>
    `;
    document.getElementById('questionsList').appendChild(li);
}

function editQuestion(button) {
    const li = button.parentElement;
    const questionData = li.innerHTML.split('<br>');

    document.getElementById('question').value = questionData[0].split(': ')[1];
    document.getElementById('option1').value = questionData[2].split('. ')[1];
    document.getElementById('option2').value = questionData[3].split('. ')[1];
    document.getElementById('option3').value = questionData[4].split('. ')[1];
    document.getElementById('option4').value = questionData[5].split('. ')[1];
    document.getElementById('correct').value = questionData[6].split(': ')[1];

    li.remove();
}

function deleteQuestion(button) {
    button.parentElement.remove();
}
