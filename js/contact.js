document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the form is valid
        if (form.checkValidity()) {
            // Show the notification
            notification.style.display = "flex";

            // Automatically hide the notification after 3 seconds
            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);

            // Clear the form fields after showing the notification
            form.reset();
        } else {
            // If the form is invalid, let the browser show validation messages
            form.reportValidity();
        }
    });
});
