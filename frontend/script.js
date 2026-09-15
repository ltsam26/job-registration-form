const form = document.getElementById("jobForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const experienceType =
        document.querySelector(
            'input[name="experienceType"]:checked'
        );

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        department: document.getElementById("department").value,
        experienceType: experienceType.value,
        phone: document.getElementById("phone").value,
        resume: document.getElementById("resume").value,
        linkedin: document.getElementById("linkedin").value
    };

    try {
        const response = await fetch(
            "https://job-registration-form.onrender.com/api/applications",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (response.ok) {
            message.textContent =
                "Application submitted successfully!";

            form.reset();
        } else {
            message.textContent =
                result.message || "Submission failed";
        }
    } catch (error) {
        console.error(error);

        message.textContent =
            "Unable to connect to server.";
    }
});