document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Display the notification
        notification.style.display = "flex";

        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);

        // Clear the form fields
        form.reset();
    });
});
