document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Initialize EmailJS
    emailjs.init("K50t6Du4DL8Dtz1y9"); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    alert(formData.email + formData.message + formData.name + formData.subject);

    // Send the email
    emailjs.send("service_chbabnu", "template_sbbefu5", formData).then(
      function (response) {
        alert("Your message has been sent successfully!");
      },
      function (error) {
        alert("Failed to send your message. Please try again later.", error);
      }
    );
  });
