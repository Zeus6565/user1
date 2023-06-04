    // Function to handle form submission
    function submitForm() {
      var passwordInput = document.getElementById("password").value;
      var hashedInput = sha256(passwordInput);
      var passwordHash = "7a2ec40ff8a1247c532309355f798a779e00acff579c63eec3636ffb2902c1ac";

      if (hashedInput === passwordHash) {
        setCookie("password", hashedInput, 30); // Set the cookie for 30 seconds
        showContent();
      } else {
        alert("Invalid password. Please try again.");
      }
      return false;
    }
