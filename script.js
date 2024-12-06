document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Your message has been sent!");
});