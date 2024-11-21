let validateForm = () => {
  let name = document.contactForm.name.value;
  let email = document.contactForm.email.value;
  let mobile = document.contactForm.mobile.value;

  let Error = true;

  if (name === "") {
    Error = false;
    document.getElementById("nameErr").innerHTML = "Enter your name";
  } else {
    const regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(name)) {
      document.getElementById("nameErr").innerHTML = "";
    } else {
      Error = false;
      document.getElementById("nameErr").innerHTML = "Invalid name";
    }
  }

  if (email === "") {
    Error = false;
    document.getElementById("emailErr").innerHTML = "Enter your email id";
  } else {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      document.getElementById("emailErr").innerHTML = "";
    } else {
      Error = false;
      document.getElementById("emailErr").innerHTML = "Invalid email";
    }
  }

  if (mobile === "") {
    Error = false;
    document.getElementById("mobileErr").innerHTML = "Enter your mobile number";
  } else {
    if (isNaN(mobile)) {
      Error = false;
      document.getElementById("mobileErr").innerHTML = "Invalid mobile number";
    } else {
      if (mobile.toString().length === 10 && mobile.length > 0) {
        document.getElementById("mobileErr").innerHTML = "";
      } else {
        Error = false;
        document.getElementById("mobileErr").innerHTML ="Mobile number should be 10 digits";
      }
    }
  }

  const con = document.contactForm.country.value;

  if (con === "0") {
    Error = false;
    document.getElementById("countryErr").innerHTML = "Invalid country";
  } else {
    document.getElementById("countryErr").innerHTML = "";
  }

  const gen = document.getElementsByName("gender");

  flag = false;
  for (let i = 0; i < gen.length; i++) {
    if (gen[i].checked) {
      flag = true;
    }
  }
  // console.log(flag);

  if (flag) {
    document.getElementById("genderErr").innerHTML = "";
  } else {
    Error = false;
    document.getElementById("genderErr").innerHTML = "Select gender";
  }

  let hobbies = document.getElementsByName("hobbies");
  let hobbiesArray = [];

  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      hobbiesArray.push(hobbies[i].value);
    }
  }

  if (hobbiesArray.length >= 2) {
    document.getElementById("hobbyErr").innerHTML = "";
  } else {
    Error = false;
    document.getElementById("hobbyErr").innerHTML ="Select at atleast two hobbies";
  }

  console.log(Error);

  return Error;
  
};
