function validate() {
  var email = document.getElementById("email").value;

  var phone = document.getElementById("phone").value;

  var messagee = document.getElementById("error");

  var text;
  messagee.style.backgroundColor = "purple";
  messagee.style.padding = "10px";
  messagee.style.color = "white";
  messagee.style.transition = "all .4s ease-in-out";
  messagee.style.fontFamily = "cursive";

  if (email == "" && phone == "") {
    text = "please enter valid email and phone";
    messagee.innerHTML = text;
    return false;
  } else if (email.indexOf("@") == -1) {
    text = "please enter valid email";
    messagee.innerHTML = text;
    return false;
  } else if (isNaN(phone)) {
    text = "please enter valid phone";
    messagee.innerHTML = text;
    return false;
  } else if (email.length > 0 && phone == "") {
    text = "please enter valid email or phone";
    messagee.innerHTML = text;
    return false;
  } else {
    alert("success");
    return true;
  }
}
