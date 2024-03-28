// Call generateForm() when the page loads
window.onload = function() {
    generateForm();
};

function generateForm() {
    var numSubjects = parseInt(document.getElementById("numSubjects").value);
    var subjectsForm = document.getElementById("subjectsForm");
    subjectsForm.innerHTML = ""; // Clear previous form

    for (var i = 1; i <= numSubjects; i++) {
        var subjectDiv = document.createElement("div");
        subjectDiv.className = "subject-input";

        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Subject " + i + " Name:";
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.required = true;

        var markLabel = document.createElement("label");
        markLabel.textContent = "Marks for Subject " + i + ":";
        var markInput = document.createElement("input");
        markInput.type = "number";
        markInput.min = 0;
        markInput.max = 100;
        markInput.required = true;

        subjectDiv.appendChild(nameLabel);
        subjectDiv.appendChild(nameInput);
        subjectDiv.appendChild(document.createElement("br"));
        subjectDiv.appendChild(markLabel);
        subjectDiv.appendChild(markInput);
        subjectDiv.appendChild(document.createElement("br"));

        subjectsForm.appendChild(subjectDiv);
    }
}

function calculateResults() {
    var subjectInputs = document.querySelectorAll(".subject-input");
    var numSubjects = subjectInputs.length;
    var totalMarks = 0;

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    for (var i = 0; i < numSubjects; i++) {
        var subjectDiv = subjectInputs[i];
        var subjectName = subjectDiv.querySelector("input[type='text']").value.trim();
        var marks = parseFloat(subjectDiv.querySelector("input[type='number']").value);

        if (subjectName === "" || isNaN(marks)) {
            alert("Please enter valid data for all subjects.");
            return;
        }

        var subjectPara = document.createElement("p");
        subjectPara.textContent = "Subject: " + subjectName + ", Marks: " + marks;
        resultsDiv.appendChild(subjectPara);

        totalMarks += marks;
    }

    var averageMarks = totalMarks / numSubjects;

    var grade = calculateGrade(averageMarks);

    var averageMarksPara = document.createElement("p");
    averageMarksPara.textContent = "Average Marks: " + averageMarks.toFixed(2);
    resultsDiv.appendChild(averageMarksPara);

    var gradePara = document.createElement("p");
    gradePara.textContent = "Grade: " + grade;
    resultsDiv.appendChild(gradePara);
}

function calculateGrade(averageMarks) {
    if (averageMarks >= 80) {
        return "A";
    } else if (averageMarks >= 70) {
        return "B";
    } else if (averageMarks >= 60) {
        return "C";
    } else if (averageMarks >= 50) {
        return "C-";
    } else if (averageMarks >= 40) {
        return "D";
    } else {
        return "F";
    }
}
