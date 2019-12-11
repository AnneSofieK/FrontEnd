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

    if(sessionStorage.getItem("Firstname") != null)
    {
      document.getElementById("contact-check").checked = false;
      checkContact();
      document.getElementById("Firstname").value = sessionStorage.getItem("Firstname");
      document.getElementById("Surname").value = sessionStorage.getItem("Surname");
      document.getElementById("Address").value = sessionStorage.getItem("Address");
      document.getElementById("PC").value = sessionStorage.getItem("PC");
      document.getElementById("City").value = sessionStorage.getItem("City");
      document.getElementById("Email").value = sessionStorage.getItem("Email");
    }
    allInfoIsValid();
  }

});

//Click function for continue button on step 3 in the form
function saveDriverInfo() {

  if(allInfoIsValid()) {

    //Saving all driverInformation
    sessionStorage.setItem("driverName", document.getElementById("inputDriverName").value);
    sessionStorage.setItem("driverSurname", document.getElementById("inputDriverSurname").value);
    sessionStorage.setItem("driverAddress", document.getElementById("inputAddress").value);
    sessionStorage.setItem("driverPC", document.getElementById("inputPC").value);
    sessionStorage.setItem("driverCity", document.getElementById("inputCity").value);
    sessionStorage.setItem("driverEmail", document.getElementById("inputEmail").value);

    if(!document.getElementById("contact-check").checked)
    {
      //Saving all customer information
      sessionStorage.setItem("Firstname", document.getElementById("Firstname").value);
      sessionStorage.setItem("Surname", document.getElementById("Surname").value);
      sessionStorage.setItem("Address", document.getElementById("Address").value);
      sessionStorage.setItem("PC", document.getElementById("PC").value);
      sessionStorage.setItem("City", document.getElementById("City").value);
      sessionStorage.setItem("Email", document.getElementById("Email").value);
    }

    //Go to step 4 in form
    location.href = "Finish.html";
  }
}

function allInfoIsValid() {
  let elements = [
      document.getElementById("inputDriverName"),
      document.getElementById("inputDriverSurname"),
      document.getElementById("inputCity"),
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
        document.getElementById("City"),
        document.getElementById("Address"),
        document.getElementById("Email"),
        document.getElementById("PC")
    );
  }

  let isValid = false;

  elements.forEach(element => {
    alert(element.id);
    if(validate(element))
    {
      isValid = true;
    }
    else
    {
      isValid = false;
    }
  });

  return isValid;
}

function validate(element){

  regex = new RegExp(element.getAttribute("pattern"));

  if(regex.test(element.value) && element.value.length !== 0)
  {
    setMarker(element, true);
    return true;
  }
  setMarker(element,false);
  return false;
}

function setMarker(element, isValid) {
  if(isValid)
  {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
  }
  else
  {
    element.classList.add("is-invalid");
  }
}


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
        '<label for="inputCity">City</label>' +
        '<input type="text" class="form-control" id="City" pattern="^[a-zA-ZÆØÅæøå\\s]*$" required onfocusout="validate(this)">' +
        '<div class="invalid-feedback">' +
          'Invalid city.' +
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