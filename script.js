function myfun() {
  var newPassword = document.getElementById("new-psw").value;
  var reenterPassword = document.getElementById("reenter-psw").value;

  if (newPassword == "") {
    document.getElementById("messages1").innerHTML = "Please Fill Password";
    document.getElementById("new-psw").style.borderColor = "#EB5757";
    document.getElementById("reenter-psw").style.borderColor = "black";
    return false;
  }

  var letters = /^[A-Za-z]+$/
  if (!newPassword.match(letters)) {
    document.getElementById("messages1").innerHTML =
      "Password should contains only characters from the alphabet";

    document.getElementById("new-psw").style.borderColor = "#EB5757";
    document.getElementById("reenter-psw").style.borderColor = "black";
    return false;
  }

  if (newPassword.length < 8) {
    document.getElementById("messages1").innerHTML =
      "Password length is less than 8";
    document.getElementById("new-psw").style.borderColor = "#EB5757";
    document.getElementById("reenter-psw").style.borderColor = "black";
    return false;
  }

  if (reenterPassword == "" && newPassword != "") {
    document.getElementById("messages1").innerHTML = "";
    document.getElementById("messages2").innerHTML =
      "Please Re-Enter your Password";
    document.getElementById("new-psw").style.borderColor = "black";
    document.getElementById("reenter-psw").style.borderColor = "#EB5757";
    return false;
  }

  if (newPassword != reenterPassword) {
    document.getElementById("messages1").innerHTML = "";
    document.getElementById("messages2").innerHTML =
      "New Password and Re-Enter Password doesnot match";
    document.getElementById("new-psw").style.borderColor = "black";
    document.getElementById("reenter-psw").style.borderColor = "#EB5757";
    return false;
  } else {
    document.getElementById("messages1").innerHTML = "";
    document.getElementById("messages2").innerHTML = "";
    document.getElementById("form").style.display = "none";
    document.getElementById("resetHeading").style.display = "none";
    document.getElementById("new").style.display = "none";
    document.getElementById("psw-changed").classList.remove("Notvisible");
    document.getElementById("psw-changed2").classList.remove("Notvisible");
    return false;
  }
}
