document.addEventListener("DOMContentLoaded", function() {
    const userDataForm = document.getElementById("userDataForm");
    const outputElement = document.getElementById("output");
    const qualificationForm = document.getElementById("qualificationForm");
    const subjectForm = document.getElementById("subjectForm");
    const subjectInputsContainer = document.getElementById("subjectInputs");
    
    userDataForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const qualification = document.getElementById("qualification").value;
        const numSubjects = parseInt(document.getElementById("numSubjects").value);


            // Generate input fields for subjects
        for (let i = 1; i <= numSubjects; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Enter subject ${i}`;
            input.required = true;
            subjectInputsContainer.appendChild(input);
    }
        subjectInputsContainer.addEventListener("input", function() {
        const subjectInputs = subjectInputsContainer.querySelectorAll("input");
        const subjects = [];
        
        subjectInputs.forEach(input => {
            subjects.push(input.value);
        });
    });
        
        // Display user data on the page
        outputElement.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Subjects:</strong> ${subjects.join(", ")}</p>
        `;
        
        // Clear the form fields
        userDataForm.reset();
    });
    
    function getQualificationLabel(qualification) {
        switch (qualification) {
            case "high-school":
                return "High School";
            case "bachelors":
                return "Bachelor's Degree";
            case "masters":
                return "Master's Degree";
            case "phd":
                return "Ph.D.";
            case "other":
                return "Other";
            default:
                return "Unknown";
        }
    }
});



    
    
    
