$(document).ready(function () {
  //Checks if the information already has been filled out
  if(sessionStorage.getItem("driverName") != null)
  {
    document.getElementById("inputDriverName").value = sessionStorage.getItem("driverName");
    document.getElementById("inputDriverSurname").value = sessionStorage.getItem("driverSurname");
    document.getElementById("inputAddress").value = sessionStorage.getItem("driverAddress");
    document.getElementById("inputPC").value = sessionStorage.getItem("driverPC");
    document.getElementById("inputCity").value = sessionStorage.getItem("driverCity");
    document.getElementById("inputEmail").value = sessionStorage.getItem("driverEmail");

    isAllValid();
  }
});

//Click function for continue button on step 3 in the form
function saveDriverInfo() {

  if(isAllValid()) {

    //Saving all driverInformation
    sessionStorage.setItem("driverName", document.getElementById("inputDriverName").value);
    sessionStorage.setItem("driverSurname", document.getElementById("inputDriverSurname").value);
    sessionStorage.setItem("driverAddress", document.getElementById("inputAddress").value);
    sessionStorage.setItem("driverPC", document.getElementById("inputPC").value);
    sessionStorage.setItem("driverCity", document.getElementById("inputCity").value);
    sessionStorage.setItem("driverEmail", document.getElementById("inputEmail").value);

    //Go to step 4 in form
    location.href = "Finish.html";
  }
}

function isAllValid() {
  let elements = [document.getElementById("inputDriverName"), document.getElementById("inputDriverSurname"), document.getElementById("inputCity")];
  let isValid = false;

  elements.forEach(element => {
    if(validateTextOnly(element))
    {
      isValid = true;
    }
    else
    {
      isValid = false;
    }
  });

  return validateAddress() && validateEmail() && validatePC() && isValid === true;
}

function validateTextOnly(element) {

    if(/^[a-zA-ZÆØÅæøå\s]*$/.test(element.value) && element.value != "")
    {
      element.classList.remove("is-invalid");
      element.classList.add("is-valid");
      return true;
    }
    else
    {
      element.classList.add("is-invalid");
      return false;
    }
}

function validateAddress(){
  let address = document.getElementById("inputAddress");

  if(/^[a-zA-Z0-9ÆØÅæøå.\s]*$/.test(address.value) && address.value != "")
  {
    address.classList.remove("is-invalid");
    address.classList.add("is-valid");
    return true;
  }
  else
  {
    address.classList.add("is-invalid");
    return false;
  }
}

function validatePC(){
  let pc = document.getElementById("inputPC");

  if(/^\d{4}$/.test(pc.value))
  {
    pc.classList.remove("is-invalid");
    pc.classList.add("is-valid");
    return true;
  }
  else
  {
    pc.classList.add("is-invalid");
    return false;
  }
}

function validateEmail(){
  let email = document.getElementById("inputEmail");

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    return true;
  }
  else
  {
    email.classList.add("is-invalid");
    return false;
  }
}
