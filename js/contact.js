document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the form is valid
        if (form.checkValidity()) {
            // Add 'show' class to display notification
            notification.classList.remove('hide');
            notification.classList.add('show');

            // Remove 'show' class and add 'hide' class after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                notification.classList.add('hide');
            }, 3000);

            // Clear the form fields after showing the notification
            form.reset();
        } else {
            // If the form is invalid, let the browser show validation messages
            form.reportValidity();
        }
    });
});
