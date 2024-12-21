document.getElementById('seller-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can enhance this as needed)
    if (name && email && company && message) {
        alert('Form submitted successfully!');
        // You can also submit the form data to a server here
    } else {
        alert('Please fill in all fields');
    }
});