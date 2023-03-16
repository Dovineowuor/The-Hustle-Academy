function validateForm() {
        var name = document.forms["myForm"]["name"].value;
        var email = document.forms["myForm"]["email"].value;
        var phone = document.forms["myForm"]["phone"].value;
        var gender = document.forms["myForm"]["gender"].value;
        var password = document.forms["myForm"]["password"].value;
        var emailRegex = /\S+@\S+\.\S+/;

        if (name == "") {
          alert("Please enter your name.");
          document.forms["myForm"]["name"].focus();
          return false;
        }

        if (email == "") {
          alert("Please enter your email address.");
          document.forms["myForm"]["email"].focus();
          return false;
        } else if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          document.forms["myForm"]["email"].focus();
          return false;
        }

        if (phone == "") {
          alert("Please enter your phone number.");
          document.forms["myForm"]["phone"].focus();
          return false;
        }

        if (gender == "") {
          alert("Please select your gender.");
          document.forms["myForm"]["gender"].focus();
          return false;
        }

        if (password == "") {
          alert("Please enter a password.");
          document.forms["myForm"]["password"].focus();
          return false;
        }

        alert("Form submitted successfully!");
        return true;
      }