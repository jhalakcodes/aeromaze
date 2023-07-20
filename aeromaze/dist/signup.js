// document.getElementById("signup-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
    
//     // Perform form validation and submission here
//     // You can add your own logic or make an API request to handle form submission
    
//     // Example: Log form data to the console
//     console.log("Name: " + name);
//     console.log("Email: " + email);
//     console.log("Password: " + password);
//   });
  
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform validation or additional actions if needed
  
    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      password: password
    };
  
    // Send the form data to the server (you can replace this with your own code)
    console.log(formData); // Display the form data in the console
  
    // Reset the form
    document.getElementById("signup-form").reset();
  }
  