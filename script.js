const assignments = [
    "Assignment 1: HTML Basics",
    "Assignment 2: CSS Styling",
    "Assignment 3: JavaScript Functions"
];

const assignmentList = document.getElementById('assignment-list');

assignments.forEach(assignment => {
    const listItem = document.createElement('li');
    listItem.textContent = assignment;
    assignmentList.appendChild(listItem);
});
