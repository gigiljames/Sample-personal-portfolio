document.getElementById("contact-form").addEventListener("submit", sendMail);
function sendMail(event) {
  event.preventDefault();
  const form = document.getElementById("contact-form");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (
    formData.name === "" ||
    formData.message === "" ||
    formData.email === "" ||
    formData.subject === ""
  ) {
    displayError(form, "Please fill all the fields.");
  } else if (emailRegex.test(formData.email) == false) {
    displayError(form, "Please enter a valid email.");
  } else {
    // alert(formData.email + formData.message + formData.name + formData.subject);
    emailjs.init({
      publicKey: "K50t6Du4DL8Dtz1y9",
    });
    emailjs.send("service_chbabnu", "template_sbbefu5", formData).then(
      function (response) {
        // alert("Your message has been sent successfully!");
        displaySuccess(form, "Your message has been sent successfully!");
      },
      function (error) {
        // alert("Failed to send your message. Please try again later.\n" + error);
        displayError(
          form,
          "Failed to send your message. Please try again later.\n" + error
        );
      }
    );
  }
}

function displayError(thisForm, error) {
  thisForm.querySelector(".loading").classList.remove("d-block");
  thisForm.querySelector(".error-message").innerHTML = error;
  document.querySelector(".error-message").style.background = "red";
  thisForm.querySelector(".error-message").classList.add("d-block");
}

function displaySuccess(thisForm, message) {
  thisForm.querySelector(".loading").classList.remove("d-block");
  thisForm.querySelector(".error-message").innerHTML = message;
  document.querySelector(".error-message").style.background = "green";
  thisForm.querySelector(".error-message").classList.add("d-block");
}
