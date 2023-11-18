function alertUser() {
  let name = prompt("What is your name?");
  let mail = prompt("What is your E-mail address?");
  let address = prompt("Where do you live?");
  if (address === "Nigeria" || address === "nigeria") {
    alert(
      "Thank you, " +
        name +
        " ,for contacting us! We will be in touch via E-mail🍦."
    );
  } else {
    alert(
      "Congratulations💃 " +
        name +
        " you have the chance to get an African styled outfit for free😊! We would reach out again via E-mail."
    );
  }
}
let contactUs = document.querySelector("button");
contactUs.addEventListener("click", alertUser);
