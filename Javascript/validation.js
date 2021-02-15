function validation() {
  
  Name = document.getElementById('userNameInput').value;
  Email = document.getElementById('userEmailInput').value;
  Website = document.getElementById('userWebsiteInput').value;
  ImageLink = document.getElementById('userImageInput').value;

  if (Name == "") {
    alert("Enter your name!! Name field can't be empty.");
    document.getElementById('userNameInput').focus();
    return false;
  }

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!Email.match(mailformat)) {
    alert("You have entered an invalid email address!");
    document.getElementById('userEmailInput').focus();
    return false;
  }
  var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!regexp.test(Website)) {
    alert("You have entered an invalid website");
    document.getElementById('userWebsiteInput').focus();
    return false;
  }
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(ImageLink) == false) {
    alert("Please enter correct image link!");
    document.getElementById('userImageInput').focus();
    return false;
  }
  if ((document.myForm.gender[0].checked == false) && (document.myForm.gender[1].checked == false)) {
    alert("Please choose your Gender: Male or Female");
    return false;
  }
  if ((document.myForm.skills[0].checked == false) && (document.myForm.skills[1].checked == false) && (document.myForm.skills[2].checked == false)) {
    alert("Please choose atleast one of the skills!");
    return false;
  }

  AddRow();
};
