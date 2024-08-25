document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the Learn More button
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        window.location.href = '#about';  // Scroll to the About section
    });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Simple validation
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            // Here you would typically send the form data to a server
        } else {
            alert('Please fill out all fields.');
        }
    });
});
