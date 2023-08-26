document.addEventListener("DOMContentLoaded", function() {
    const userDataForm = document.getElementById("userDataForm");
    const outputElement = document.getElementById("output");
    const subjectInputsContainer = document.getElementById("subjectInputs");

    userDataForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = getValueById("name");
        const email = getValueById("email");
        const qualification = getValueById("qualification");
        const numSubjects = parseInt(getValueById("numSubjects"));

        const subjects = [];
        for (let i = 1; i <= numSubjects; i++) {
            const input = createInput("text", `Enter subject ${i}`, true);
            subjectInputsContainer.appendChild(input);
        }

        subjectInputsContainer.addEventListener("input", function() {
            const subjectInputs = subjectInputsContainer.querySelectorAll("input");
            subjects.length = 0;

            subjectInputs.forEach(input => {
                subjects.push(input.value);
            });
        });

        const qualificationLabel = getQualificationLabel(qualification);

        outputElement.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Qualification:</strong> ${qualificationLabel}</p>
            <p><strong>Subjects:</strong> ${subjects.join(", ")}</p>
        `;

        userDataForm.reset();
    });

    function getValueById(id) {
        return document.getElementById(id).value;
    }

    function createInput(type, placeholder, required) {
        const input = document.createElement("input");
        input.type = type;
        input.placeholder = placeholder;
        input.required = required;
        return input;
    }

    function getQualificationLabel(qualification) {
        const qualificationLabels = {
            "high-school": "High School",
            "bachelors": "Bachelor's Degree",
            "masters": "Master's Degree",
            "phd": "Ph.D.",
            "other": "Other"
        };
        return qualificationLabels[qualification] || "Unknown";
    }
});
/*Changes made:

Extracted the code to get input values and create input elements into separate functions for better modularity and readability.
Used an object to map qualification values to labels for improved code maintainability and readability.
Ensured that the subjects array is properly reset before populating it with input values.
Improved naming conventions for better understanding of functions and variables.
Adjusted formatting and indentation to enhance code clarity.
These changes help make your JavaScript code more organized and easier to maintain.-->*/





