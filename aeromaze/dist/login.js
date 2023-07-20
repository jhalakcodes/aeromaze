document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Perform login validation
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
      // Successful login, redirect to dashboard or perform other actions
      alert("Login successful!");
    } else {
      // Display error message
      var errorElement = document.createElement("p");
      errorElement.className = "error-message";
      errorElement.textContent = "Invalid username or password";
      document.getElementById("loginForm").appendChild(errorElement);
    }
  });
  