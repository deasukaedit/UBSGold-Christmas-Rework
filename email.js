function sendMail(event) {
  event.preventDefault();

  let parms = {
    name: document.getElementById("name-input").value,
    phone: document.getElementById("phone-input").value,
    message: document.getElementById("customize-textbox").value,
    reply_to: document.getElementById("email-input").value,
  };

  emailjs.send("service_fi838qc", "template_5p1d6xv", parms).then(
    function (response) {
      alert("Email Sent!!");
    },
    function (error) {
      alert("Failed to send email. Please try again.");
    }
  );
}
