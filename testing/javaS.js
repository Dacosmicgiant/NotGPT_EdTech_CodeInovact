document.addEventListener("DOMContentLoaded", function() {
    const userDataForm = document.getElementById("userDataForm");
    const outputElement = document.getElementById("output");
    const subjectInput = document.getElementById("subjectInput");

    userDataForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = getValueById("name");
        const email = getValueById("email");
        const qualification = getValueById("qualification");
        
        const subjectsInput = subjectInput.value.trim(); // Retrieve subject input
        const subjectsArray = subjectsInput.split(',').map(subject => subject.trim()); // Split and clean up subjects
        
        const qualificationLabel = getQualificationLabel(qualification);

        outputElement.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Qualification:</strong> ${qualificationLabel}</p>
            <p><strong>Subjects:</strong> ${subjectsArray.join(', ')}</p>
        `;

        userDataForm.reset();
    });

    function getValueById(id) {
        return document.getElementById(id).value;
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
