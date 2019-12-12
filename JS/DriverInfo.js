$(document).ready(function () {
  //Checks if the information already has been filled out. If it has, then it displays the already inserted information
  if(sessionStorage.getItem("driverName") != null)
  {
    document.getElementById("inputDriverName").value = sessionStorage.getItem("driverName");
    document.getElementById("inputDriverSurname").value = sessionStorage.getItem("driverSurname");
    document.getElementById("inputAddress").value = sessionStorage.getItem("driverAddress");
    document.getElementById("inputPC").value = sessionStorage.getItem("driverPC");
    document.getElementById("inputPhoneNo").value = sessionStorage.getItem("driverPhoneNo");
    document.getElementById("inputEmail").value = sessionStorage.getItem("driverEmail");

    //Checks if the customer and driver was different. If yes, customer information is displayed
    if(sessionStorage.getItem("Firstname") != null)
    {
      document.getElementById("contact-check").checked = false;
      checkContact();
      document.getElementById("Firstname").value = sessionStorage.getItem("Firstname");
      document.getElementById("Surname").value = sessionStorage.getItem("Surname");
      document.getElementById("Address").value = sessionStorage.getItem("Address");
      document.getElementById("PC").value = sessionStorage.getItem("PC");
      document.getElementById("PhoneNo").value = sessionStorage.getItem("PhoneNo");
      document.getElementById("Email").value = sessionStorage.getItem("Email");
    }
    //Set the style on all the inputfields
    allDriverInfoIsValid();
  }
});

/**
 * Saves all the driver information in the session storage
 */
function saveDriverInfo() {

  //Checks that all the inputs is valid before saving them
  if(allDriverInfoIsValid()) {

    //Saving all driverInformation
    sessionStorage.setItem("driverName", document.getElementById("inputDriverName").value);
    sessionStorage.setItem("driverSurname", document.getElementById("inputDriverSurname").value);
    sessionStorage.setItem("driverAddress", document.getElementById("inputAddress").value);
    sessionStorage.setItem("driverPC", document.getElementById("inputPC").value);
    sessionStorage.setItem("driverPhoneNo", document.getElementById("inputPhoneNo").value);
    sessionStorage.setItem("driverEmail", document.getElementById("inputEmail").value);

    if(!document.getElementById("contact-check").checked)
    {
      //Saving all customer information
      sessionStorage.setItem("Firstname", document.getElementById("Firstname").value);
      sessionStorage.setItem("Surname", document.getElementById("Surname").value);
      sessionStorage.setItem("Address", document.getElementById("Address").value);
      sessionStorage.setItem("PC", document.getElementById("PC").value);
      sessionStorage.setItem("PhoneNo", document.getElementById("PhoneNo").value);
      sessionStorage.setItem("Email", document.getElementById("Email").value);
    }

    //Go to step 4 in form
    location.href = "Finish.html";
  }
}

/**
 * Checks if all the input elements values is valid
 * @returns {boolean} - true/false depending on if all the elements input is valid
 */
function allDriverInfoIsValid() {
  let elements = [
      document.getElementById("inputDriverName"),
      document.getElementById("inputDriverSurname"),
      document.getElementById("inputPhoneNo"),
      document.getElementById("inputAddress"),
      document.getElementById("inputEmail"),
      document.getElementById("inputPC")
  ];

  //Checking if driver and customer info is the same. If not the elements which contains the customer info is added
  if(!document.getElementById("contact-check").checked)
  {
    elements.push(
        document.getElementById("Firstname"),
        document.getElementById("Surname"),
        document.getElementById("PhoneNo"),
        document.getElementById("Address"),
        document.getElementById("Email"),
        document.getElementById("PC")
    );
  }
  return validateElements(elements);
}

/**
 * Checks if the customer checked off that the driver info is the same as the customer info
 * If the customer checked it off, new input elements is inserted and displayed
 * If the customer checks it on again, the new input elements is removed
 */
function checkContact() {
  let checkContact = document.getElementById("contact-check");

  if(checkContact.checked == false){
    var buttons = document.getElementsByClassName("buttons");
    buttons[0].insertAdjacentHTML("beforebegin",
    '<div id="optional">'+
    '<hr class="my-4">'+
    '<div class="form-row">'+
      '<div class="form-group col-md-6" id="caption-container">'+
        '<label for="inputFirstName">First Name</label>'+
        '<input type="text" class="form-control" id="Firstname" pattern="^[a-zA-ZÆØÅæøå\\s]*$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid firstname.' +
        '</div>' +
      '</div>' +
      '<div class="form-group col-md-6" id="caption-container">' +
        '<label for="inputSurname">Surname</label>' +
        '<input type="text" class="form-control" id="Surname" pattern="^[a-zA-ZÆØÅæøå\\s]*$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid surname.' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="form-row" id="caption">' +
    '</div>' +
    '<div class="form-row">' +
      '<div class="form-group col-md-6">' +
        '<label for="inputAddress">Address</label>' +
        '<input type="text" class="form-control" id="Address" placeholder="1234 Main St" pattern="^[a-zA-Z0-9ÆØÅæøå.\\s]*$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid address.' +
        '</div>' +
      '</div>' +
      '<div class="form-group col-md-6">' +
        '<label for="inputPC">Post Code</label>' +
        '<input type="text" class="form-control" id="PC" pattern="^\\d{4}$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid postal code. It should be four digits' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="form-row">' +
      '<div class="form-group col-md-6">' +
        '<label for="inputPhoneNo">Phone no.</label>' +
        '<input type="text" class="form-control" id="PhoneNo" pattern="^[a-zA-ZÆØÅæøå\\s]*$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid phone number.' +
        '</div>' +
      '</div>' +
      '<div class="form-group col-md-6">' +
        '<label for="inputEmail">Email</label>' +
        '<input type="email" class="form-control" id="Email" pattern="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid email.' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'
    );
  }
  else{
    let optional = document.getElementById("optional");
    optional.parentNode.removeChild(optional);
  }
}